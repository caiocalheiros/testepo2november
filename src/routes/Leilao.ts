app.post('/leiloes', async (req, res) => {
    try {
      const { produto, preco, dataLimite, donoId } = req.body;
      const leilao = await prisma.leilao.create({
        data: { produto, preco, dataLimite, donoId },
      });
      res.json(leilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar leilão.' });
    }
  });
  
  // Rota para obter todos os leilões
  app.get('/leiloes', async (req, res) => {
    try {
      const leiloes = await prisma.leilao.findMany();
      res.json(leiloes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter leilões.' });
    }
  });

  