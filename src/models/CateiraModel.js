import { Schema, model } from 'mongoose'; 

const carteiraSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    carteira: {
        type: Number,
        default: 0    
    },
    currency: {
        type: String,
        default: "USD"
    },
    creartedAt: {
        type: Date,
        default: Date.now
    },
    
});

export default model('Carteira', carteiraSchema);