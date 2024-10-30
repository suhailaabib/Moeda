

import Usuario from '../models/usuarioModel.js';

export const store = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => { 
    try {
        const usuario= await Usuario.find().exec();
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const usuario= await Usuario.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
