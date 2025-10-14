import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft, ExternalLink } from 'lucide-react';
import { useProjetos } from '../hooks/useProjetos';
import { Projeto } from '../services/api';
import ProjetoModal from '../components/ProjetoModal';
import Swal from 'sweetalert2';

const GerenciarProjetos: React.FC = () => {
  const { projetos, loading, error, addProjeto, updateProjeto, deleteProjeto } = useProjetos();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProjeto, setEditingProjeto] = useState<Projeto | null>(null);
  const [saving, setSaving] = useState(false);

  const handleOpenModal = (projeto?: Projeto) => {
    setEditingProjeto(projeto || null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingProjeto(null);
  };

  const handleSaveProjeto = async (projetoData: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>) => {
    setSaving(true);
    try {
      let result;
      if (editingProjeto) {
        result = await updateProjeto(editingProjeto._id!, projetoData);
      } else {
        result = await addProjeto(projetoData);
      }

      if (result.success) {
        await Swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: editingProjeto ? 'Projeto atualizado com sucesso!' : 'Projeto criado com sucesso!',
          timer: 2000,
          showConfirmButton: false
        });
        handleCloseModal();
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: result.message || 'Erro ao salvar projeto'
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Erro inesperado ao salvar projeto'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProjeto = async (projeto: Projeto) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: `Deseja excluir o projeto "${projeto.titulo}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      const deleteResult = await deleteProjeto(projeto._id!);
      if (deleteResult.success) {
        await Swal.fire({
          icon: 'success',
          title: 'Excluído!',
          text: 'Projeto excluído com sucesso!',
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: deleteResult.message || 'Erro ao excluir projeto'
        });
      }
    }
  };

  const getCategoriaColor = (categoria: string) => {
    const colors: Record<string, string> = {
      'Landing Page': '#28a745',
      'Site Institucional': '#007bff',
      'Blog': '#6f42c1',
      'E-commerce': '#fd7e14',
      'Portfólio': '#20c997',
      'Aplicativo Web': '#e83e8c',
      'Sistema Web': '#6c757d',
      'Loja Virtual': '#ffc107',
      'Site Corporativo': '#17a2b8',
      'Site Pessoal': '#6f34fe'
    };
    return colors[categoria] || '#6c757d';
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(33deg, rgba(242, 242, 255, 1) 0%, rgba(235, 249, 255, 1) 100%)',
      padding: '20px 0'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '40px 0' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            color: '#3f396d', 
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #3f396d 0%, #07003b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Gerenciar Projetos
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#7d7789', 
            maxWidth: '600px', 
            margin: '0 auto 30px auto' 
          }}>
            Adicione, edite ou remova projetos do seu portfólio
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link 
              to="/" 
              style={{ 
                background: 'transparent',
                color: '#3f396d',
                border: '2px solid #3f396d',
                padding: '12px 24px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowLeft size={16} />
              Voltar ao Site
            </Link>
            <button 
              onClick={() => handleOpenModal()}
              style={{ 
                background: 'linear-gradient(135deg, #fda81e 0%, #ff8c00 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(253, 168, 30, 0.3)'
              }}
            >
              <Plus size={20} />
              Adicionar Projeto
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>⏳</div>
            <h3 style={{ color: '#3f396d', marginBottom: '10px' }}>Carregando projetos...</h3>
            <p style={{ color: '#7d7789' }}>Aguarde enquanto buscamos seus projetos</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{ 
            background: '#f8d7da',
            color: '#721c24',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px',
            border: '1px solid #f5c6cb',
            textAlign: 'center'
          }}>
            <h4>❌ Erro ao carregar projetos</h4>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && projetos.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📁</div>
            <h3 style={{ color: '#3f396d', marginBottom: '15px' }}>Nenhum projeto encontrado</h3>
            <p style={{ color: '#7d7789', marginBottom: '30px' }}>
              Comece adicionando seu primeiro projeto ao portfólio
            </p>
            <button 
              onClick={() => handleOpenModal()}
              style={{ 
                background: 'linear-gradient(135deg, #fda81e 0%, #ff8c00 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(253, 168, 30, 0.3)'
              }}
            >
              <Plus size={20} />
              Adicionar Projeto
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projetos.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px',
            marginTop: '20px'
          }}>
            {projetos.map((projeto) => (
              <div key={projeto._id} style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}>
                {/* Imagem */}
                <div style={{ position: 'relative' }}>
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  {/* Tag de Categoria */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: getCategoriaColor(projeto.categoria),
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {projeto.categoria}
                  </div>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#3f396d',
                    marginBottom: '10px',
                    lineHeight: '1.3'
                  }}>
                    {projeto.titulo}
                  </h3>
                  
                  <p style={{
                    color: '#7d7789',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    fontSize: '0.95rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {projeto.descricao}
                  </p>

                  {/* Link */}
                  {projeto.link && (
                    <div style={{ marginBottom: '20px' }}>
                      <a
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#fda81e',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <ExternalLink size={14} />
                        Ver projeto
                      </a>
                    </div>
                  )}

                  {/* Botões de Ação */}
                  <div style={{
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <button
                      onClick={() => handleOpenModal(projeto)}
                      style={{
                        flex: 1,
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Edit size={16} />
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProjeto(projeto)}
                      style={{
                        flex: 1,
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Trash2 size={16} />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        <ProjetoModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveProjeto}
          projeto={editingProjeto}
          loading={saving}
        />
      </div>
    </div>
  );
};

export default GerenciarProjetos;