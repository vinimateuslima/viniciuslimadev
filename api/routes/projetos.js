const express = require('express');
const router = express.Router();
const Projeto = require('../models/Projeto');

// GET /api/projetos - Listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projetos = await Projeto.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: projetos.length,
      data: projetos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar projetos',
      error: error.message
    });
  }
});

// GET /api/projetos/:id - Buscar projeto por ID
router.get('/:id', async (req, res) => {
  try {
    const projeto = await Projeto.findById(req.params.id);
    
    if (!projeto) {
      return res.status(404).json({
        success: false,
        message: 'Projeto não encontrado'
      });
    }

    res.json({
      success: true,
      data: projeto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar projeto',
      error: error.message
    });
  }
});

// POST /api/projetos - Criar novo projeto
router.post('/', async (req, res) => {
  try {
    const { titulo, categoria, descricao, imagem, link } = req.body;

    // Validações básicas
    if (!titulo || !categoria || !descricao || !imagem) {
      return res.status(400).json({
        success: false,
        message: 'Título, categoria, descrição e imagem são obrigatórios'
      });
    }

    // Validar tamanho da imagem (50MB = 50 * 1024 * 1024 bytes em base64)
    const base64Size = (imagem.length * 3) / 4;
    const maxSize = 50 * 1024 * 1024; // 50MB
    
    if (base64Size > maxSize) {
      return res.status(400).json({
        success: false,
        message: 'Imagem muito grande. Tamanho máximo: 50MB'
      });
    }

    const projeto = new Projeto({
      titulo,
      categoria,
      descricao,
      imagem,
      link: link || ''
    });

    await projeto.save();

    res.status(201).json({
      success: true,
      message: 'Projeto criado com sucesso',
      data: projeto
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao criar projeto',
      error: error.message
    });
  }
});

// PUT /api/projetos/:id - Atualizar projeto
router.put('/:id', async (req, res) => {
  try {
    const { titulo, categoria, descricao, imagem, link } = req.body;

    // Validações básicas
    if (!titulo || !categoria || !descricao || !imagem) {
      return res.status(400).json({
        success: false,
        message: 'Título, categoria, descrição e imagem são obrigatórios'
      });
    }

    // Validar tamanho da imagem se fornecida
    if (imagem) {
      const base64Size = (imagem.length * 3) / 4;
      const maxSize = 50 * 1024 * 1024; // 50MB
      
      if (base64Size > maxSize) {
        return res.status(400).json({
          success: false,
          message: 'Imagem muito grande. Tamanho máximo: 50MB'
        });
      }
    }

    const projeto = await Projeto.findByIdAndUpdate(
      req.params.id,
      {
        titulo,
        categoria,
        descricao,
        imagem,
        link: link || ''
      },
      { new: true, runValidators: true }
    );

    if (!projeto) {
      return res.status(404).json({
        success: false,
        message: 'Projeto não encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Projeto atualizado com sucesso',
      data: projeto
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Erro ao atualizar projeto',
      error: error.message
    });
  }
});

// DELETE /api/projetos/:id - Excluir projeto
router.delete('/:id', async (req, res) => {
  try {
    const projeto = await Projeto.findByIdAndDelete(req.params.id);

    if (!projeto) {
      return res.status(404).json({
        success: false,
        message: 'Projeto não encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Projeto excluído com sucesso',
      data: projeto
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao excluir projeto',
      error: error.message
    });
  }
});

module.exports = router;
