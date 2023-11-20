import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoController {
  async criarLeilao(req: Request, res: Response) {
    try {
      const { produto, preco, dataLimite, donoId } = req.body;
      const leilao = await prisma.leilao.create({
        data: { produto, preco, dataLimite },
      });
      res.json(leilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar leilão.' });
    }
  }

  async obterLeiloes(req: Request, res: Response) {
    try {
      const leiloes = await prisma.leilao.findMany();
      res.json(leiloes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter leilões.' });
    }
  }
}

export default LeilaoController;
