function noEstaLogeado(req,res,next) {
    if(req.session.usuarioLogeado) {
        res.redirect('/usersList');
    } else {
        next();
    }
}

module.exports = noEstaLogeado;