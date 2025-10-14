# 🚀 Instruções de Deploy - GitHub + Vercel

## 📋 Passo a Passo para Deploy

### 1. 📤 Subir para GitHub

```bash
# Inicializar git (se não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Commit inicial
git commit -m "Initial commit: Portfolio Vinicius Lima"

# Conectar ao repositório GitHub
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Push para GitHub
git push -u origin main
```

### 2. 🔗 Conectar GitHub ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório do GitHub
5. Configure as variáveis de ambiente (veja seção abaixo)

### 3. ⚙️ Configurar Variáveis de Ambiente no Vercel

No painel do Vercel, vá em **Settings > Environment Variables** e adicione:

```
DBUSER = viniciusmateusdev
DBPASS = GZcaLBFtoxX7VqKD
DBNAME = projetos-vinicius-lima
```

### 4. 🎯 Configurações do Projeto no Vercel

- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5. ✅ Deploy Automático

Após conectar o GitHub:
- ✅ O Vercel irá detectar automaticamente o `vercel.json`
- ✅ Buildará o frontend React
- ✅ Deployará a API Node.js
- ✅ Configurará as rotas automaticamente

## 🔧 Estrutura de Deploy

```
GitHub Repository
├── frontend/          # Build automático para frontend
├── api/               # Deploy como serverless function
└── vercel.json        # Configuração de rotas
```

## 🌐 URLs Finais

Após o deploy, você terá:
- **Site**: `https://seu-projeto.vercel.app`
- **API**: `https://seu-projeto.vercel.app/api`
- **Admin**: `https://seu-projeto.vercel.app/gerenciarProjetos`

## 🐛 Troubleshooting

### Erro: "Environment Variable references Secret"
- ✅ **Corrigido**: Removidas referências aos secrets do `vercel.json`
- ✅ **Solução**: Configure as variáveis diretamente no painel do Vercel

### Erro: "Build failed"
- ✅ **Verificar**: Node.js version (16+)
- ✅ **Verificar**: Dependências instaladas
- ✅ **Verificar**: Scripts no package.json

### API não funciona
- ✅ **Verificar**: Variáveis de ambiente configuradas
- ✅ **Verificar**: MongoDB Atlas conectado
- ✅ **Verificar**: CORS configurado

## 📊 Status do Projeto

- ✅ **Frontend**: Pronto para build
- ✅ **Backend**: Pronto para deploy
- ✅ **Database**: Conectado
- ✅ **Configuração**: Otimizada para Vercel
- ✅ **GitHub**: Estrutura preparada

## 🎉 Resultado Final

Após seguir estes passos, você terá:
- ✅ Site funcionando em produção
- ✅ API REST operacional
- ✅ Gerenciamento de projetos ativo
- ✅ Deploy automático via GitHub
- ✅ Domínio personalizado (se configurado)

---

**Pronto para deploy! 🚀**
