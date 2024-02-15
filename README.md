# Projeto Pizzaria

## Descrição

Este é um projeto de uma API de Pizzaria, que inclui operações CRUD (Create, Read, Update, Delete) para pizzas.

## Funcionalidades

- Criação, leitura, atualização e exclusão de pizzas
- Registro e autenticação de usuários
A criação, atualização e exclusão de uma pizza só pode ser feito por um usuário autenticado.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run dev`
4. Acesse a API em `http://localhost:3000`

## Rotas da API

- `/pizza/create`: POST - Criar uma nova pizza
- `/pizza/findAll`: GET - Encontrar todas as pizzas
- `/pizza/findById/:id`: GET - Encontrar uma pizza por ID
- `/pizza/update/:id`: PUT - Atualizar uma pizza por ID
- `/pizza/delete/:id`: DELETE - Deletar uma pizza por ID
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
└── swagger.json

```


## Documentação da API
A documentação da API pode ser acessada em http://localhost:3000/api-docs.
