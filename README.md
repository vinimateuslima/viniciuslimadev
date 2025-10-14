# Vinicius Lima - Portfolio Website

Este é o portfólio pessoal do Vinicius Lima, desenvolvido com React e Node.js, totalmente funcional e pronto para deploy no Vercel.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express, MongoDB
- **Estilização**: CSS3, Bootstrap
- **Deploy**: Vercel
- **Banco de Dados**: MongoDB Atlas

## 📁 Estrutura do Projeto

```
├── frontend/          # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # Serviços de API
│   │   └── styles/        # Arquivos CSS
│   └── package.json
├── api/               # Backend Node.js
│   ├── models/        # Modelos do MongoDB
│   ├── routes/        # Rotas da API
│   ├── config/        # Configurações
│   └── server.js      # Servidor principal
└── vercel.json        # Configuração do Vercel
```

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 16+ 
- MongoDB Atlas

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd api
npm install
npm run dev
```

## 🌐 Deploy no Vercel

### 1. 📤 Subir para GitHub
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Vinicius Lima"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### 2. 🔗 Conectar GitHub ao Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe o repositório

### 3. ⚙️ Configure as Variáveis de Ambiente no Vercel:
No painel do Vercel: **Settings > Environment Variables**
```
DBUSER = viniciusmateusdev
DBPASS = GZcaLBFtoxX7VqKD
DBNAME = projetos-vinicius-lima
```

### 4. ✅ Deploy Automático
O Vercel irá:
- ✅ Buildar o frontend React automaticamente
- ✅ Deployar a API Node.js como serverless function
- ✅ Configurar as rotas via vercel.json

## 📝 Funcionalidades Implementadas

### 🎨 Frontend
- ✅ Portfólio dinâmico com projetos da API
- ✅ Gerenciamento completo de projetos (CRUD)
- ✅ Upload de imagens (base64, limite 50MB)
- ✅ Filtros por categoria dinâmicos
- ✅ Modal de visualização de imagens
- ✅ Design responsivo e moderno
- ✅ Seção de depoimentos
- ✅ Preços com design profissional
- ✅ Botão WhatsApp flutuante

### 🔧 Backend
- ✅ API REST completa (GET, POST, PUT, DELETE)
- ✅ Modelo de Projeto com validações
- ✅ Conexão MongoDB Atlas
- ✅ Middleware de CORS configurado
- ✅ Tratamento de erros
- ✅ Validação de imagens base64

### 🎯 Páginas
- ✅ **Home**: Site principal com portfólio dinâmico
- ✅ **Gerenciar Projetos**: Interface administrativa completa

## 🔗 URLs de Produção

- **Site Principal**: https://vinilimadev.com
- **Site Alternativo**: https://viniciuslimadev-ten.vercel.app
- **API**: https://vinilimadev.com/api
- **Gerenciar Projetos**: https://vinilimadev.com/gerenciarProjetos
- **Health Check**: https://vinilimadev.com/api/health

## 📊 Status do Projeto

- ✅ **Frontend**: 100% funcional
- ✅ **Backend**: 100% funcional  
- ✅ **Database**: Conectado e operacional
- ✅ **Deploy**: Configurado para Vercel
- ✅ **Build**: Testado e funcionando
- ✅ **TypeScript**: Sem erros
- ✅ **Imagens**: Corrigidas para produção
- ✅ **WOW.js**: Funcionando sem erros
- ✅ **Responsivo**: Mobile e desktop
- ✅ **Performance**: Otimizado

## 🎨 Design Features

- **Cores Principais**: Mantidas do design original
- **Gradientes Modernos**: Seção de preços
- **Animações**: Hover effects e transições
- **Tipografia**: Josefin Sans
- **Ícones**: Font Awesome + Lucide React

## 📧 Contato

- **Email**: viniciusmateus.dev@gmail.com
- **WhatsApp**: (81) 9 9974-0336
- **LinkedIn**: [Vinicius Lima](https://www.linkedin.com/in/vinicius-lima-924807181/)
- **Instagram**: [@viniciuslimadev](https://www.instagram.com/viniciuslimadev/)

## 🚀 Pronto para Deploy!

O projeto está **100% funcional** e pronto para ser deployado no Vercel. Todas as configurações estão corretas e o banco de dados está conectado.

---

Desenvolvido com ❤️ por Vinicius Lima