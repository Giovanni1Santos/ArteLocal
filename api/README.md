# 📇 API de Cadastro de Contatos (PostgreSQL)
Este é o backend da aplicação de contatos usando PostgreSQL, Sequelize ORM, Express e autenticação com JWT. Ideal para bancos relacionais com validação forte de dados

# 🚀 Tecnologias Utilizadas
- 🧩 Node.js

- ⚙️ Express

- 🐘 PostgreSQL

- 🧾 Sequelize

- 🔐 JWT (JSON Web Token)

- ⚙️ dotenv

# ⚙️ Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua-chave-secreta
```

# 📦 Instalação
```
git clone https://github.com/Ryaannsz/rotas-express-postgre.git
cd backend-postgres-contato
npm install
```
# ▶️ Executando o Projeto
```
npx sequelize db:migrate
npm run dev
```

# 📌 Funcionalidades da API
Registro de usuário (/register)

Login com JWT (/login)

- CRUD de contatos:

  - GET /contatos – Listar contatos

  - POST /contatos – Criar novo contato

  - PUT /contatos/:id – Atualizar contato

  - DELETE /contatos/:id – Deletar contato

Todas as rotas de contatos requerem autenticação via Bearer Token.

# 🧪 Teste com Insomnia/Postman
Faça login para obter um token JWT.

Use o token para acessar as rotas protegidas enviando no header:

```
Authorization: Bearer <seu_token>
```

# 📄 Licença
Este projeto está sob a licença MIT.


# Vídeo de funcionamento do login e registro
[![Watch the video](https://img.youtube.com/vi/QJPFw77ijw0/maxresdefault.jpg)](https://youtu.be/QJPFw77ijw0)

# Vídeo de funcionamento do CRUD de contatos
[![Watch the video](https://img.youtube.com/vi/73-zqrstS9M/maxresdefault.jpg)](https://youtu.be/73-zqrstS9M)








