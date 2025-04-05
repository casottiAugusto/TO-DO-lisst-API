import Database from "better-sqlite3";

// Cria (ou abre) o banco de dados local
const db = new Database("list.db");

// Cria a tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
  )
`).run();

export default db;
