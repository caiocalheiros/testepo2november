import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para criar um usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const usuario = await prisma.usuario.create({
      data: { nome, email },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Rota para obter todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter usuários.' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
