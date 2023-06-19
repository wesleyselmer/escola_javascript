const router = require("express").Router()

const escolasRouter = require("./escolas")
const alunosRouter = require("./alunos")

router.use("/", escolasRouter)
router.use("/", alunosRouter)

module.exports = router;
