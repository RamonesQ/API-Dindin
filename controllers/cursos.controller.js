const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");

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
    }
};

module.exports = CursoController;