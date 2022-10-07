const fs = require("fs");
const path = require('path'); 

function cargarUsuarios(){
    const jsonData = fs.readFileSync(path.join(__dirname, "../data/users.json"));
    const data = JSON.parse(jsonData);
    return data
}

function recordameMiddle(req,res,next) {   
    const usuarios = cargarUsuarios(); 
    if (req.cookies.recuerdame && !(req.session.usuarioLogeado)) {
        const indice=req.cookies.recuerdame;
        req.session.usuarioLogeado = {
            id: usuarios[indice].id,
            nombre: usuarios[indice].nombre,
        }
    }
    next();
}

module.exports = recordameMiddle;