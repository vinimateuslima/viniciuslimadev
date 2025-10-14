import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ImageUpload from './ImageUpload';
import { Projeto } from '../services/api';

interface ProjetoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (projeto: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  projeto?: Projeto | null;
  loading?: boolean;
}

const categorias = [
  'Landing Page',
  'Site Institucional',
  'Blog',
  'E-commerce',
  'Portfólio',
  'Aplicativo Web',
  'Sistema Web',
  'Loja Virtual',
  'Site Corporativo',
  'Site Pessoal'
];

const ProjetoModal: React.FC<ProjetoModalProps> = ({
  isOpen,
  onClose,
  onSave,
  projeto,
  loading = false
}) => {
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    descricao: '',
    imagem: '',
    link: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (projeto) {
      setFormData({
        titulo: projeto.titulo,
        categoria: projeto.categoria,
        descricao: projeto.descricao,
        imagem: projeto.imagem,
        link: projeto.link || ''
      });
    } else {
      setFormData({
        titulo: '',
        categoria: '',
        descricao: '',
        imagem: '',
        link: ''
      });
    }
    setErrors({});
  }, [projeto, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.titulo.trim()) {
      newErrors.titulo = 'Título é obrigatório';
    } else if (formData.titulo.length > 100) {
      newErrors.titulo = 'Título deve ter no máximo 100 caracteres';
    }

    if (!formData.categoria) {
      newErrors.categoria = 'Categoria é obrigatória';
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao = 'Descrição é obrigatória';
    } else if (formData.descricao.length > 1000) {
      newErrors.descricao = 'Descrição deve ter no máximo 1000 caracteres';
    }

    if (!formData.imagem) {
      newErrors.imagem = 'Imagem é obrigatória';
    }

    if (formData.link && !/^https?:\/\/.+/.test(formData.link)) {
      newErrors.link = 'Link deve ser uma URL válida (http:// ou https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error('Erro ao salvar projeto:', error);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 30px',
          borderBottom: '1px solid #e1e5e9'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#3f396d',
            margin: 0
          }}>
            {projeto ? 'Editar Projeto' : 'Adicionar Projeto'}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#7d7789',
              padding: '5px',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '30px' }}>
          {/* Título */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              Título do Projeto *
            </label>
            <input
              type="text"
              value={formData.titulo}
              onChange={(e) => handleInputChange('titulo', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${errors.titulo ? '#dc3545' : '#e1e5e9'}`,
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'border-color 0.3s ease'
              }}
              placeholder="Digite o título do projeto"
            />
            {errors.titulo && (
              <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                {errors.titulo}
              </span>
            )}
          </div>

          {/* Categoria */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              Categoria *
            </label>
            <select
              value={formData.categoria}
              onChange={(e) => handleInputChange('categoria', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${errors.categoria ? '#dc3545' : '#e1e5e9'}`,
                borderRadius: '8px',
                fontSize: '16px',
                backgroundColor: 'white'
              }}
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
            {errors.categoria && (
              <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                {errors.categoria}
              </span>
            )}
          </div>

          {/* Imagem */}
          <ImageUpload
            value={formData.imagem}
            onChange={(base64) => handleInputChange('imagem', base64)}
            label="Imagem Principal"
            required
            error={errors.imagem}
          />

          {/* Descrição */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              Descrição *
            </label>
            <textarea
              value={formData.descricao}
              onChange={(e) => handleInputChange('descricao', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${errors.descricao ? '#dc3545' : '#e1e5e9'}`,
                borderRadius: '8px',
                fontSize: '16px',
                resize: 'vertical',
                minHeight: '100px'
              }}
              placeholder="Descreva o projeto em detalhes..."
            />
            {errors.descricao && (
              <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                {errors.descricao}
              </span>
            )}
          </div>

          {/* Link */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              color: '#333'
            }}>
              Link do Projeto (opcional)
            </label>
            <input
              type="url"
              value={formData.link}
              onChange={(e) => handleInputChange('link', e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: `2px solid ${errors.link ? '#dc3545' : '#e1e5e9'}`,
                borderRadius: '8px',
                fontSize: '16px'
              }}
              placeholder="https://exemplo.com"
            />
            {errors.link && (
              <span style={{ color: '#dc3545', fontSize: '14px', marginTop: '5px', display: 'block' }}>
                {errors.link}
              </span>
            )}
          </div>

          {/* Botões */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'flex-end'
          }}>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              style={{
                background: '#6c757d',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #fda81e 0%, #ff8c00 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(253, 168, 30, 0.3)'
              }}
            >
              {loading ? '⏳ Salvando...' : (projeto ? 'Atualizar' : 'Adicionar')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjetoModal;
