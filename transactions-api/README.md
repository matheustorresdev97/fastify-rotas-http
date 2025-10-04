# 💸 Transactions API

API desenvolvida durante o estudo dos fundamentos do **Node.js** com foco em **Fastify**, **Knex** e **TypeScript**.  
O projeto implementa um sistema de controle de transações financeiras (créditos e débitos) com autenticação via **cookies de sessão**.

--- 

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Knex.js](https://knexjs.org/)
- [SQLite3](https://www.sqlite.org/)
- [Zod](https://zod.dev/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Funcionalidades

- **POST /transactions** → Cria uma nova transação (crédito ou débito)  
- **GET /transactions** → Lista todas as transações da sessão  
- **GET /transactions/:id** → Busca uma transação específica  
- **GET /transactions/summary** → Retorna o saldo total da sessão  

Cada transação possui os seguintes campos:

```json
{
  "id": "uuid",
  "title": "Compra Mercado",
  "amount": 200,
  "session_id": "uuid",
  "created_at": "2025-10-04T00:00:00.000Z"
}
```

## 🧩 Regras e comportamentos

- As transações são associadas a uma sessão identificada por cookie (sessionId).
- Cada usuário (sessão) só pode visualizar suas próprias transações.
- Débitos reduzem o saldo, créditos aumentam.
- O summary retorna a soma total considerando todas as transações da sessão.

## ▶️ Como rodar o projeto

Clone o repositório:

```
git clone https://github.com/matheustorresdev97/transactions-api.git
cd transactions-api
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

Os testes cobrem:

- Criação de transação
- Listagem de transações
- Busca por ID
- Cálculo de resumo (saldo total)