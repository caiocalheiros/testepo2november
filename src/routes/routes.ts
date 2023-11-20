import express from 'express';
import UsuarioController from '../controllers/UsuarioController';
import LeilaoController from '../controllers/LeilaoController';
import LanceController from '../controllers/LanceController';

const app = express();

const usuarioController = new UsuarioController();
const leilaoController = new LeilaoController();
const lanceController = new LanceController();

app.use(express.json());

// Rotas para Usuários
app.post('/usuarios', usuarioController.criarUsuario);
app.get('/usuarios', usuarioController.obterUsuarios);

// Rotas para Leilões
app.post('/leiloes', leilaoController.criarLeilao);
app.get('/leiloes', leilaoController.obterLeiloes);

// Rotas para Lances
app.post('/lances', lanceController.criarLance);
app.get('/lances', lanceController.obterLances);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta -> ${PORT}`);
});