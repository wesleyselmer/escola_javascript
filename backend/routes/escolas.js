const router = require("express").Router()

const escolaController = require("../controllers/escolaController");

router.route("/escolas").post((req, res) => escolaController.create(req, res));
router.route("/escolas").get((req, res) => escolaController.getAll(req, res));
router.route("/escolas/:id").get((req, res) => escolaController.get(req, res));
router.route("/escolas/:id").delete((req, res) => escolaController.delete(req, res));
router.route("/escolas/:id").put((req, res) => escolaController.update(req, res));

module.exports = router;