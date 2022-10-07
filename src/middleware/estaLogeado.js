function estaLogeado(req,res,next) {
    if(req.session.usuarioLogeado) {
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = estaLogeado;