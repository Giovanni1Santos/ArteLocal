# 🧶 ArteLocal

**ArteLocal** é uma plataforma educacional voltada para o cadastro e login de artesãos, desenvolvida como parte da disciplina **Alta Qualidade em Software** na Universidade SENAI CIMATEC. O objetivo é simular um projeto real de desenvolvimento de software, com foco em boas práticas, controle de versão e arquitetura limpa.

---

## 🎯 Objetivo da Sprint 1

Implementar o MVP com o cadastro e login de artesãos (CRUD completo com autenticação), seguindo um processo real de desenvolvimento definido pela equipe.

---

## 🚀 Tecnologias utilizadas

### 🔧 Back-end
- Node.js + Express
- PostgreSQL com Sequelize ORM
- JWT (JSON Web Token) para autenticação
- Docker + Docker Compose

### 🌐 Front-end
- React
- Axios
- React Router DOM

### 🧪 Testes (próximas sprints)
- Jest (unitários)
- Selenium (E2E)

### ⚙️ Processo de desenvolvimento
- GitHub com Git Flow básico (`main` + `feature/*`)
- Backlog no Jira
- Protótipos no Figma
- Documento de Visão (Google Docs)

---

## 🏗️ Arquitetura do Projeto

```
ArteLocal/
├── api/
│   └── src/
│       ├── controllers/     # Lógica de negócio
│       ├── models/          # Definição ORM (Sequelize)
│       ├── routes/          # Endpoints REST
│       ├── config/          # Conexão com banco de dados
│       ├── app.js           # Inicialização do Express
│       └── server.js        # Startup da API
├── client/
│   └── src/
│       ├── pages/           # Login e Registro
│       ├── components/      # Componentes reutilizáveis
│       ├── services/        # Comunicação com API
│       └── App.jsx          # Rotas principais
├── docker-compose.yml       # Infraestrutura local com Docker
├── .env                     # Segredos como JWT\_SECRET
└── README.md                # Este arquivo
```

---

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos
- Node.js (v16+)
- Docker e Docker Compose instalados

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/ArteLocal.git
   cd ArteLocal
   ```

2. Crie o arquivo `.env` dentro da pasta `api/`:
   ```
   JWT_SECRET=segredo123
   ```

3. Suba os serviços com Docker:
   ```bash
   docker-compose up --build
   ```

4. Acesse:
   - API (backend): `http://localhost:3001/api/artesaos`
   - Front-end: `http://localhost:3000` *(se rodar com `npm start` dentro de `client/`)*

---

## ✅ Funcionalidades entregues na Sprint 1

* [x] Cadastro de artesãos (nome, email, senha com hash)
* [x] Login com autenticação JWT
* [x] Listagem, edição e exclusão de artesãos
* [x] Comunicação entre front-end e back-end via API REST
* [x] Banco de dados PostgreSQL com persistência via Sequelize
* [x] Ambiente local com Docker Compose
* [x] Estrutura de pastas seguindo arquitetura MVC
* [x] Versionamento com Git Flow
* [x] Protótipos criados no Figma
* [x] Backlog da Sprint 1 no Jira
* [x] Documento de Visão no Google Docs

---

## 📌 Processo de desenvolvimento real seguido

* **Coleta de Requisitos:** Workshop com artesãos fictícios (roleplay)
* **Planejamento:** Backlog estruturado no Jira
* **Prototipação:** Telas de cadastro/login no Figma
* **Execução:** CRUD e autenticação JWT funcionando
* **Controle de Versão:** Git Flow simplificado (`main` + `feature/*`)
* **Revisão de Código:** Pull Requests com checklist de segurança básica (OWASP Top 10)
* **Implantação local:** Docker Compose com API + PostgreSQL

---

## 🗓️ Planejamento das Sprints

### ✅ Sprint 1 – Cadastro de Artesãos
* CRUD com autenticação via JWT
* Infraestrutura Docker
* Versionamento com Git Flow
* Jira, Figma e Documento de Visão entregues

### 🚧 Sprint 2 – Catálogo de Produtos
* Cadastro e listagem de produtos
* Testes unitários com Jest
* Testes E2E com Selenium
* Diagrama C4 simplificado

### 🔜 Sprint 3 – Carrinho de Compras
* Adição de produtos ao carrinho
* Simulação de pagamento com TDD
* Logs com console + arquivos
* Cobertura de testes com GitHub Actions

---

## 👥 Equipe

* Giovanni Leão
* Ralph Rodrigues
* Ryan Bernardo

---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais, no contexto da disciplina **Alta Qualidade em Software - 2025** (SENAI CIMATEC).
```
