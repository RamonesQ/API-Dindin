const express = require("express");
const CursoController = require("../controllers/cursos.controller");

const routes = express.Router();

routes.post("/cursos/novo", CursoController.cadastrarCurso);
routes.get("/cursos/lista", CursoController.listarCurso);

module.exports = routes;