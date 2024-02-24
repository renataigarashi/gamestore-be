# Projeto Gamestore

## Descrição

Este é um projeto de uma API de uma loja de games, que inclui operações CRUD (Create, Read, Update, Delete).

## Funcionalidades

- Criação, leitura, atualização e exclusão
- Registro e autenticação de usuários
  A criação, atualização e exclusão de um item só pode ser feito por um usuário autenticado.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Instalação

1. Clone o repositório: `git clone https://github.com/renataigarashi/gamestore-be`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run dev`
4. Acesse a API em `http://localhost:3000`

## Rotas da API

- `/product/create`: POST - Criar um novo produto
- `/product/findAll`: GET - Encontrar todas as produto
- `/product/findById/:id`: GET - Encontrar uma produto por ID
- `/product/update/:id`: PUT - Atualizar uma produto por ID
- `/product/delete/:id`: DELETE - Deletar uma produto por ID
- `/user/register`: POST - Registrar um novo usuário
- `/user/login`: POST - Autenticar um usuário
- `/user/verify-token`: GET - Verificar a validade do token do usuário

## Estrutura do Projeto

```shell
├── controllers/
├── database/
├── middleware/
├── models/
├── routes/
├── services/
└── index.js


```
