const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/tarefasControllers")
router.get("/",controller.get)
router.get("/concluido", controller.getConcluido)
router.get("/:nomeColaborador/busca",controller.getnomeColaborador)
router.get("/:id",controller.getById)

module.exports = router