const mongoose = require("mongoose")

const { schema } = mongoose;

const { escolaSchema } = require("./Escola")

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    turma: {
        type: String,
        required: true
    },
    turno: {
        type: String,
        required: true
    },
    escola: {
        type: [escolaSchema],
    },
    
}, { timestamps: true }
);

const Aluno = mongoose.model("Aluno", alunoSchema);

module.exports = {
    Aluno,
    alunoSchema,
};