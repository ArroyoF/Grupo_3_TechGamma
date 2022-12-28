const db = require('../../../database/models');
const sequelize = db.sequelize;

const apiControladoresProductos = {

    list: (req, res) => {

        let cant_categ;

        db.products.findAll({group:['categoria']})
            .then((categ)=>{cant_categ=(categ.length)})
        
        db.products.findAll()
                .then(
                    products => {
                        let response = {
                            meta: {
                                status: 200,
                                count: products.length,
                                categories: cant_categ,
                                url: 'api/products'
                            },
                            products: products
                        }
                        res.json(response);
                    }
                )
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