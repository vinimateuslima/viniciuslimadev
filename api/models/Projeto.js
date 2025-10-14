const mongoose = require('mongoose');

const projetoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'O título é obrigatório'],
    trim: true,
    maxlength: [100, 'O título não pode ter mais de 100 caracteres']
  },
  categoria: {
    type: String,
    required: [true, 'A categoria é obrigatória'],
    trim: true,
    enum: {
      values: [
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
      ],
      message: 'Categoria inválida'
    }
  },
  descricao: {
    type: String,
    required: [true, 'A descrição é obrigatória'],
    trim: true,
    maxlength: [1000, 'A descrição não pode ter mais de 1000 caracteres']
  },
  imagem: {
    type: String,
    required: [true, 'A imagem é obrigatória'],
    validate: {
      validator: function(v) {
        // Validar se é base64 válido
        return /^data:image\/(jpeg|jpg|png|gif|webp);base64,/.test(v);
      },
      message: 'Formato de imagem inválido. Use JPEG, PNG, GIF ou WebP'
    }
  },
  link: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // Link é opcional
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Link deve ser uma URL válida (http:// ou https://)'
    }
  }
}, {
  timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

// Índices para melhor performance
projetoSchema.index({ categoria: 1 });
projetoSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Projeto', projetoSchema);
