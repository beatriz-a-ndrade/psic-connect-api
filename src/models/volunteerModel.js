const mongoose = require('mongoose')

// 

const volunteerSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true,
        unique: true,
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

    CRP: {
        type: Number,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    contato: {
        type: Number,
        required: true,
        unique: true
    },

    experienciaclinica: {
        type: String,
        required: true
    },

    disponibilidade: {
        type: String,
        required: true
    },

    disponivel: {
         type: Boolean,
         required: true
     },

      senha: {
           type: String,
           required: true
       }

}, {
    timestamps: true
})


const Model = mongoose.model('volunteer', volunteerSchema)

module.exports = Model