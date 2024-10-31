
import Transacoes from '../models/transacoesModel.js';

export const store = async (req, res) => {
    try {
        const transacoes = await Transacoes.create(req.body);
        return res.status(201).json(transacoes);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const show = async (req, res) =>{
    try{
        const transacoes = await Transacoes.findById(req.params.id).exec();
        res.json(transacoes);
    }catch (error) {
        res.status(400).send(error);
    }
};