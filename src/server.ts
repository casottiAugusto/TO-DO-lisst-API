import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

dotenv.config(); // Carrega variáveis do .env
const app = express();

app.use(express.json()); // Middleware para ler JSON no corpo da requisição

app.use("/api", taskRoutes); // Define o prefixo das rotas

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
