# API CRUD de Usuários com Node.js, Express e MySQL

Esta é uma API RESTful desenvolvida em **Node.js** utilizando o framework **Express** e banco de dados **MySQL**, com o objetivo de realizar operações de CRUD (Create, Read, Update, Delete) em usuários.

O projeto foi desenvolvido como parte de estudos em desenvolvimento backend, integração com banco de dados relacional e versionamento de código com Git.

---

## Tecnologias utilizadas

* Node.js
* Express
* MySQL
* CORS
* Git e GitHub

---

## Estrutura do projeto

```
crud-nodejs/
│
├── index.js          # Arquivo principal do servidor
├── routes.js         # Rotas da API
├── db.js             # Configuração da conexão com o MySQL
├── package.json      # Dependências e scripts do projeto
├── .gitignore
└── README.md
```

---

## Como executar o projeto

### 1. Clonar o repositório

```
git clone https://github.com/SEU-USUARIO/crud-nodejs.git
```

### 2. Acessar a pasta do projeto

```
cd crud-nodejs
```

### 3. Instalar as dependências

```
npm install
```

### 4. Configurar o banco de dados

No arquivo `db.js`, configure suas credenciais do MySQL:

```
host: "localhost",
user: "root",
password: "SUA_SENHA",
database: "nome_do_banco"
```

### 5. Iniciar o servidor

```
node index.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## Endpoints da API

### Listar usuários

```
GET /usuarios
```

### Criar um novo usuário

```
POST /usuarios
```

Exemplo de corpo da requisição:

```
{
  "nome": "Ana",
  "email": "ana@email.com"
}
```

### Atualizar um usuário

```
PUT /usuarios/:id
```

### Deletar um usuário

```
DELETE /usuarios/:id
```

---

## Testando a API

A API pode ser testada utilizando ferramentas como:

* Postman
* Insomnia
* Thunder Client (extensão do Visual Studio Code)

---

## Objetivo do projeto

Este projeto foi desenvolvido com fins educacionais para praticar:

* Criação de APIs REST
* Integração com banco de dados MySQL
* Organização de código em rotas e módulos
* Versionamento com Git e publicação no GitHub

---

## Autora

Rebeca Fonseca Gomes - Estudante de Desenvolvimento de Software Multiplataforma pela FATEC


Rebeca Gomes
Projeto desenvolvido durante os estudos em Desenvolvimento de Software.
