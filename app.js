import express from "express";
import { calculateController } from './src/controllers/calculateController.js';

const app = express();

app.use('/', calculateController);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
