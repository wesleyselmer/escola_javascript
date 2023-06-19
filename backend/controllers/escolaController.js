const {Escola: EscolaModel} = require("../models/Escola");

const escolaController = {
    create: async(req, res) => {
        try {
            const escola = {
                nome   : req.body.nome,
            };

            const response = await EscolaModel.create(escola);

            res.status(201).json({ response, msg: "Escola criada com sucesso!" })

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const escolas = await EscolaModel.find();

            res.json(escolas);
        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const escola = await EscolaModel.findById(id)

            if(!escola) {
                res.status(404).json({msg: "Serviço não encontrado"});
                return
            }
            
            res.json(escola);

        } catch (error) {
            
        }
    }
    

}


module.exports = escolaController;