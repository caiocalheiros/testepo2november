import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioController {
  async criarUsuario(req: Request, res: Response) {
    try {
      const { nome, email } = req.body;
      const usuario = await prisma.usuario.create({
        data: { nome, email },
      });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  }

  async obterUsuarios(req: Request, res: Response) {
    try {
      const usuarios = await prisma.usuario.findMany();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter usuários.' });
    }
  }
}

export default UsuarioController;
