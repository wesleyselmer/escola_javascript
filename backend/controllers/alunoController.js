const {Aluno: AlunoModel} = require("../models/Aluno");

const alunoController = {
    create: async(req, res) => {
        try {
            const aluno = {
                nome   : req.body.nome,
                cpf     : req.body.cpf,
                turma   : req.body.turma,
                turno   : req.body.turno,
                escola  : req.body.escola,
            };

            if(!aluno.escola) {
                res.status(204).json({msg: "Escola não encontrada."})    
            }

            const response = await AlunoModel.create(aluno);
            res.status(201).json({ response, msg: "Aluno criado com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {
        try {
            const alunos = await AlunoModel.find();

            res.json(alunos);  
        } catch (error) {
            console.log(error) 
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const aluno = await AlunoModel.findById(id)

            if(!aluno) {
                res.status(404).json({msg: "Aluno não encontrado"});
                return
            }
            
            res.json(aluno);

        } catch (error) {
            console.log(error)
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const aluno = await AlunoModel.findById(id);
            if(!aluno) {
                res.status(404).json({msg: "Aluno não encontrado"});
                return
            }

            const deletedAluno = await AlunoModel.findByIdAndDelete(id);

            res.status(200).json({deletedAluno, msg: "Escola excluída com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req, res) => {
        const id = req.params.id;
        const aluno = {
            nome   : req.body.nome,
            cpf     : req.body.cpf,
            turma   : req.body.turma,
            turno   : req.body.turno,
            escola  : req.body.escola,
        };

        const updatedAluno = await AlunoModel.findByIdAndUpdate(id, aluno);

        if(!updatedAluno) {
            res.status(404).json({msg: "Aluno não encontrado."});
            return;
        }

        res.status(200).json({aluno, msg: "Aluno atualizado com sucesso."});
    }

};

module.exports = alunoController;