const {Aluno: AlunoModel} = require("../models/Aluno");

const alunoController = {
    create: async(req, res) => {
        try {
            const aluno = {
                aluno   : req.body.aluno,
                cpf     : req.body.cpf,
                turma   : req.body.turma,
                turno   : req.body.turno,
                escola  : req.body.escola,
            };

            const response = await AlunoModel.create(aluno);

            res.status(201).json({ response, msg: "Serviço criado com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    }

};

module.exports = alunoController;