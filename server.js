const express = require("express");
const app = express();

app.use(express.json());

// Rota de health check
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Servidor de pé" });
});

// Rota POST que recebe um nome
app.post("/hello", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
  }

  res.status(200).json({ message: `Olá, ${nome}! Seja bem-vindo!` });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
