import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  async criarUsuario(nome: string, email: string) {
    return prisma.usuario.create({
      data: { nome, email },
    });
  }

  async obterUsuarios() {
    return prisma.usuario.findMany();
  }
}

export default UsuarioService;
