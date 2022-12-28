const db = require('../../../database/models');
const sequelize = db.sequelize;

const apiControladoresProductos = {

    list: (req, res) => {

        let p0 = db.products.findAll({group:['categoria']})
        let p1 = db.products.findAll()

        Promise.all([p0,p1])
            .then(respuestas=>{
                let response = {
                    meta: {
                        status: 200,
                        count: respuestas[1].length,
                        categories: respuestas[0].length,
                        url: 'api/products'
                    },
                    products: respuestas[1]
                }
                res.json(response);
            })
            .catch( error => res.send(error))
                
    },

    detail: (req, res) => {
        db.products.findByPk(req.params.id)
        .then(
            products => {
                let response = {
                    meta: {
                        status: 200,
                        url: 'api/products/:id'
                    },
                    data: products
                }
            res.json(response);
            }
        )
        .catch(error => res.send(error))
    },

    create: (req,res) => {
        db.products.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            categoria: req.body.categoria,
            tamano: req.body.tamano,
            descuento: req.body.descuento,
            imagen: req.file ? req.file.filename : "plant.jpeg",
        })
        .then(product => {
            let response = {
                meta: {
                    status: 200,
                    url: 'api/products/create'
                },
                data: product
            } 
            res.json(response)
        })
        .catch(error=>res.send(error))
    },

    delete: (req,res) => {
        db.products.destroy({where:{id:req.params.id}})
        .then(confirm => {
            let response = {
                meta: {
                    status: 200,
                    url: 'api/products/:id'
                },
                data: confirm
            } 
            res.json(response)
        })
        .catch(error=>res.send(error))
    }

}

module.exports = apiControladoresProductos;