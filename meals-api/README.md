# 🍽️ Meals API

API desenvolvida para controle de refeições e acompanhamento de dieta.  
O projeto foi construído com **Fastify**, **Knex**, **Zod** e **TypeScript**,  
incluindo autenticação baseada em **cookies de sessão** e **testes automatizados** com Vitest.

---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Knex.js](https://knexjs.org/)
- [PostgreSQL](https://www.postgresql.org/) ou [SQLite3](https://www.sqlite.org/)
- [Zod](https://zod.dev/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Supertest](https://github.com/ladjs/supertest)

---

## ⚙️ Funcionalidades

### 👤 Usuários
- **POST /users** → Cria um novo usuário e gera um cookie de sessão.  
  Cada usuário é identificado por um `sessionId` armazenado em cookie.

### 🍴 Refeições
- **POST /meals** → Cria uma nova refeição.  
- **GET /meals** → Lista todas as refeições do usuário autenticado.  
- **GET /meals/:mealId** → Retorna os detalhes de uma refeição específica.  
- **PUT /meals/:mealId** → Atualiza uma refeição existente.  
- **DELETE /meals/:mealId** → Remove uma refeição.  

### 📊 Métricas
- **GET /meals/metrics** → Retorna estatísticas do usuário:
  - Total de refeições cadastradas
  - Total de refeições dentro e fora da dieta
  - Melhor sequência de refeições dentro da dieta

---

## 🧩 Estrutura das tabelas

### 🧍 users
| Campo        | Tipo      | Descrição                        |
|---------------|-----------|----------------------------------|
| id            | UUID      | Identificador único do usuário   |
| session_id    | String    | Cookie de sessão (único)         |
| name          | String    | Nome do usuário                  |
| email         | String    | E-mail do usuário (único)        |
| created_at    | Timestamp | Data de criação                  |

### 🍽️ meals
| Campo        | Tipo      | Descrição                        |
|---------------|-----------|----------------------------------|
| id            | UUID      | Identificador da refeição        |
| user_id       | UUID      | Relacionamento com `users`       |
| name          | String    | Nome da refeição                 |
| description   | String    | Descrição da refeição            |
| is_on_diet    | Boolean   | Se a refeição está dentro da dieta |
| date          | Date      | Data da refeição                 |
| created_at    | Timestamp | Data de criação                  |

---

## ▶️ Como rodar o projeto

Clone o repositório:

```
git clone 
cd meals-api
```

Instale as dependências:

```
npm install
```

Configure o ambiente:
Crie um arquivo .env baseado no .env.example:

DATABASE_CLIENT=sqlite
DATABASE_URL=./db/app.db
PORT=3333


Execute as migrações:

npm run knex migrate:latest


Inicie o servidor:

npm run dev


Servidor disponível em:

http://localhost:3333

## 🧪 Testes

O projeto inclui testes automatizados com Vitest e Supertest.

Para rodar os testes:

```bash
npm test
```

## 🎯 Objetivo do projeto

- Consolidar o aprendizado de Fastify + Knex + TypeScript + Zod.
- Aplicar cookies de sessão para autenticação leve.
- Desenvolver métricas e lógica de negócio com base em dados do usuário.
- Praticar testes automatizados e isolamento de banco com rollback.
