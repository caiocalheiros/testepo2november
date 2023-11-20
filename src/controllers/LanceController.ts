import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceController {
  async criarLance(req: Request, res: Response) {
    try {
      const { valor, compradorId, leilaoId } = req.body;
      const lance = await prisma.lance.create({
        data: { valor },
      });
      res.json(lance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar lance.' });
    }
  }

  async obterLances(req: Request, res: Response) {
    try {
      const lances = await prisma.lance.findMany();
      res.json(lances);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter lances.' });
    }
  }
}

export default LanceController;
