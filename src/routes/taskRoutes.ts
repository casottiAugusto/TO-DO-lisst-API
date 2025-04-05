import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController";

const router = Router();

// Rotas REST
router.get("/tasks", getAllTasks);           // GET todas as tarefas
router.get("/tasks/:id", getTaskById);       // GET uma tarefa específica
router.post("/tasks", createTask);           // POST criar uma ou mais tarefas
router.put("/tasks/:id", updateTask);        // PUT atualizar tarefa
router.delete("/tasks/:id", deleteTask);     // DELETE remover tarefa

export default router;
