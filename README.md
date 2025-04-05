# 📝 To-Do List API

API RESTful simples de gerenciamento de tarefas (To-Do List), construída com **Node.js**, **TypeScript**, **Express** e **SQLite** usando `better-sqlite3`.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [Insomnia](https://insomnia.rest/) (para testar a API)

---

## 📁 Estrutura do Projeto

```
todo-api-ts/
├── src/
│   ├── controllers/       # Lógica das rotas
│   ├── db/                # Banco de dados SQLite
│   ├── models/            # Interfaces e tipos
│   ├── routes/            # Definições de rotas
│   └── server.ts          # Inicialização do servidor
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/todo-api-ts.git
cd todo-api-ts
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o projeto em modo desenvolvimento:

```bash
npm run dev
```

---

## 🧪 Testando com Insomnia

- **GET** `/api/tasks` → Listar tarefas
- **POST** `/api/tasks` → Criar tarefa

```json
{
  "title": "Estudar TypeScript"
}
```

- **PUT** `/api/tasks/:id` → Atualizar tarefa

```json
{
  "title": "Estudar SQLite",
  "completed": true
}
```

- **DELETE** `/api/tasks/:id` → Deletar tarefa

---

## 🗃️ Banco de Dados

A aplicação utiliza o SQLite com o driver `better-sqlite3` para persistência local. O banco `todo.db` é criado automaticamente na primeira execução.

---

## 📌 Variáveis de Ambiente

Crie um arquivo `.env`:

```env
PORT=3000
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## ✨ Autor

Feito com 💻 por [Seu Nome](https://github.com/seu-usuario)
