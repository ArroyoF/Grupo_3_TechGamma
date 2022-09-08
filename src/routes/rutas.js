const express = require('express')                                  // instala express
const router = express.Router();                                    // habilita ruteo
const controladores = require('../controllers/controladores')       // importa controladores

router.get('/', controladores.index);                               // usa controlador.index al entrar a home
router.get('/login', controladores.login);                          // usa controlador.login al entrar a /login
router.get('/register', controladores.register);
router.get('/productCart', controladores.productCart);
router.get('/productDetail', controladores.productDetail);

router.post('/login', controladores.entrar);
router.post('/register', controladores.crear);

module.exports = router;                                            // exporta ruteador

