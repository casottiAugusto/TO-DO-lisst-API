import { Request, Response } from "express";
import db from "../db/db";
import { Task } from "../model/Task";

export const getAllTasks = (req: Request, res: Response) => {
  const stmt = db.prepare("SELECT * FROM tasks");
  const tasks = stmt.all();
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const stmt = db.prepare("SELECT * FROM tasks WHERE id = ?");
  const task = stmt.get(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Tarefa não encontrada." });
  }
};

export const createTask = (req: Request, res: Response) => {
  const data = req.body;
  const tasksToInsert: string[] = [];

  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (item.title && typeof item.title === "string") {
        tasksToInsert.push(item.title);
      }
    });
  } else if (data.title && typeof data.title === "string") {
    tasksToInsert.push(data.title);
  } else {
    return res.status(400).json({ error: "Título inválido." });
  }

  const insertedTasks: Task[] = [];
  const stmt = db.prepare("INSERT INTO tasks (title) VALUES (?)");

  const insert = db.transaction((titles: string[]) => {
    titles.forEach((title) => {
      const result = stmt.run(title);
      insertedTasks.push({
        id: result.lastInsertRowid as number,
        title,
        completed: false,
      });
    });
  });

  insert(tasksToInsert); // <<--- EXECUTA A TRANSAÇÃO

  return res.status(201).json(insertedTasks); // <<--- RETORNA AS TAREFAS CRIADAS
};

export const updateTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const stmt = db.prepare("SELECT * FROM tasks WHERE id = ?");
  const task = stmt.get(id);

  if (!task) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  const updateStmt = db.prepare("UPDATE tasks SET title = ?, completed = ? WHERE id = ?");
  updateStmt.run(title ?? task.title, completed ?? task.completed, id);

  const updatedTask: Task = {
    id,
    title: title ?? task.title,
    completed: completed ?? task.completed,
  };

  res.json(updatedTask);
};

export const deleteTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const stmt = db.prepare("DELETE FROM tasks WHERE id = ?");
  const result = stmt.run(id);
  if (result.changes === 0) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }
  res.status(204).send();
};
