
import { Schema, model } from 'mongoose'; 

const transacoesSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        ref: 'Transacoes',
        required: true
    },
    walletFrom: {
        type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    walletTo: {
        type: Schema.Types.ObjectId,
        ref: 'Carteira',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    currency:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: false
    }
});

export default model('Transacoes', transacoesSchema);