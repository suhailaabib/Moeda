
import express from 'express';
import connectDB from './config/db.js'
import usuarioRouter from './routers/usuarioRouter.js';
import carteiraRouter from './routers/carteiraRouter.js';
import transacoesRouter from './routers/transacoesRouter.js';

connectDB();


const app = express();
app.use(express.json());

app.use('/usuario', usuarioRouter);
app.use('/carteira', carteiraRouter) 
app.use('/transacoes', transacoesRouter)

app.listen(3000, () => console.log('Server running on port 3000'));