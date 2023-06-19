const mongoose = require("mongoose")

const { schema } = mongoose

const escolaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
}, { timestamps: true }
);

const Escola = mongoose.model("Escola", escolaSchema);

module.exports = {
    Escola,
    escolaSchema,
};
 