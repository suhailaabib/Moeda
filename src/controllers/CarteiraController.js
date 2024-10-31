import Carteira from '../models/CateiraModel.js';


export const show = async (req, res) =>{
    try{
        const carteira = await Carteira.findById(req.params.id).exec();
        res.json(carteira);
    }catch (error) {
        res.status(400).send(error);
    }
};