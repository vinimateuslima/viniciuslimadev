import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://vinilimadev.com/api' : 'http://localhost:3001/api');

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Projeto {
  _id?: string;
  titulo: string;
  categoria: string;
  descricao: string;
  imagem: string; // base64
  link?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
}

// Serviços para Projetos
export const projetosService = {
  // Buscar todos os projetos
  async getAll(): Promise<ApiResponse<Projeto[]>> {
    const response = await api.get('/projetos');
    return response.data;
  },

  // Buscar projeto por ID
  async getById(id: string): Promise<ApiResponse<Projeto>> {
    const response = await api.get(`/projetos/${id}`);
    return response.data;
  },

  // Criar novo projeto
  async create(projeto: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Projeto>> {
    const response = await api.post('/projetos', projeto);
    return response.data;
  },

  // Atualizar projeto
  async update(id: string, projeto: Omit<Projeto, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Projeto>> {
    const response = await api.put(`/projetos/${id}`, projeto);
    return response.data;
  },

  // Excluir projeto
  async delete(id: string): Promise<ApiResponse<Projeto>> {
    const response = await api.delete(`/projetos/${id}`);
    return response.data;
  }
};

export default api;
