function estaLogeado(req,res,next) {
    if(req.session.usuarioLogeado) {
        next();
    } else {
        res.redirect('/user/login');
    }
}

module.exports = estaLogeado;