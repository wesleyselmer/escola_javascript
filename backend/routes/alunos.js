const router = require("express").Router()

const alunoController = require("../controllers/alunoController");

router.route("/alunos").post((req, res) => alunoController.create(req, res));

module.exports = router;