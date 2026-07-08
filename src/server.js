import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota base simples para testar o motor
app.get('/', (req, res) => {
  return res.json({ 
    status: "Etapa 1 concluída com sucesso. Motor rodando!" 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado manualmente na porta ${PORT}`);
});