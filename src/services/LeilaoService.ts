import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
  async criarLeilao(produto: string, preco: number, dataLimite: Date, donoId: number) {
    return prisma.leilao.create({
      data: { produto, preco, dataLimite},
    });
  }

  async obterLeiloes() {
    return prisma.leilao.findMany();
  }
}

export default LeilaoService;
