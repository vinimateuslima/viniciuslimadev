import { useState, useEffect } from 'react';
import { projetosService, Projeto } from '../services/api';

export const useProjetos = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carregar projetos
  const loadProjetos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await projetosService.getAll();
      if (response.success) {
        setProjetos(response.data);
      } else {
        setError(response.message || 'Erro ao carregar projetos');
      }
    } catch (err) {
      setError('Erro ao carregar projetos');
      console.error('Erro ao carregar projetos:', err);
    } finally {
      setLoading(false);
    }
  };

  // Adicionar projeto
  const addProjeto = async (projeto: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await projetosService.create(projeto);
      if (response.success) {
        setProjetos(prev => [response.data, ...prev]);
        return { success: true, data: response.data };
      } else {
        return { success: false, message: response.message };
      }
    } catch (err: any) {
      return { success: false, message: err.response?.data?.message || 'Erro ao criar projeto' };
    }
  };

  // Atualizar projeto
  const updateProjeto = async (id: string, projeto: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const response = await projetosService.update(id, projeto);
      if (response.success) {
        setProjetos(prev => prev.map(p => p._id === id ? response.data : p));
        return { success: true, data: response.data };
      } else {
        return { success: false, message: response.message };
      }
    } catch (err: any) {
      return { success: false, message: err.response?.data?.message || 'Erro ao atualizar projeto' };
    }
  };

  // Excluir projeto
  const deleteProjeto = async (id: string) => {
    try {
      const response = await projetosService.delete(id);
      if (response.success) {
        setProjetos(prev => prev.filter(p => p._id !== id));
        return { success: true };
      } else {
        return { success: false, message: response.message };
      }
    } catch (err: any) {
      return { success: false, message: err.response?.data?.message || 'Erro ao excluir projeto' };
    }
  };

  // Carregar projetos na inicialização
  useEffect(() => {
    loadProjetos();
  }, []);

  return {
    projetos,
    loading,
    error,
    addProjeto,
    updateProjeto,
    deleteProjeto,
    reloadProjetos: loadProjetos
  };
};
