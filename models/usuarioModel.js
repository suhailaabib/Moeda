
import { Schema, model } from 'mongoose'; 

const usuarioSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    role:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        required: false
    }
});

export default model('Usuario', usuarioSchema);