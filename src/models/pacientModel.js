const mongoose = require('mongoose')

// 

const pacientSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    disponibilidade: {
        type: String,
        required: true
    },

    idade: {
        type: Number,
        required: true
    },

    estadocidade: {
        type: String,
        required: true
    },

    idgenero: {
        type: String,
        required: false,
        default: "Não Informado."
    },

    etnia: {
        type: String,
        required: false,
        default: "Não Informado."
    },

    rendamedia: {
        type: Number,
        required: true
    },

    contato: {
        type: Number,
        required: true,
        unique: true
    },

    motivacao: {
        type: String,
        required: true
    },

    jafezterapia: {
        type: Boolean,
        required: true
    },

    tempoespera: {
        type: Number,
        required: false
    },

    ocupacao: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


const Model = mongoose.model('pacient', pacientSchema)

module.exports = Model