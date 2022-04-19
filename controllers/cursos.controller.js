const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");
const { cursorTo } = require("readline");

const CursoController = {

    cadastrarCurso(req, res){
        const { titulo, descricao, professor } = req.body;
        if(!titulo || !descricao || !professor){
            return res
            .status(400)
            .json({error: "Você precissa passar os atributos corretamente"});
        }
        listaDeCursos.push({
            titulo,
            descricao,
            professor,
        });
        fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));
        res.status(201).json({message:"Cadastro efetuado com sucesso!"});
        
    },
    listarCurso(req, res){
        fs.readFileSync("./models/cursos.json");    
        res.status(200).json(listaDeCursos);
    },
    deletarCurso(req, res) {
        const { titulo } = req.params;
        const novaListaCurso = listaDeCursos.filter(curso => {
            return curso.titulo != titulo;
        });
        fs.writeFileSync('./models/cursos.json', JSON.stringify(novaListaCurso));
        res.status(204).json({message:"Curso excluído!"});
    },
};

module.exports = CursoController;