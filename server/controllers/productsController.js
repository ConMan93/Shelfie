module.exports = {

    getProducts: (req, res) => {
        let db = req.app.get('db')

        db.get_inventory().then( response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log('there was an error', err)
        })
    },

    createProduct: (req, res) => {
        let db = req.app.get('db')
        let { name, price, imgurl } = req.body
        
        db.add_product({name, price, imgurl}).then( response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })

    },

    deleteProduct: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_product({ id }).then( response => {
            res.status(200).send(response)
        })
    },

    getProductById: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.get_product_byid({id}).then( response => {
            res.status(200).send(response)
        })
    },

    updateProduct: (req,res) => {
        let db = req.app.get('db')
        let { id } = req.params
        let { name, price, imgurl } = req.body

        db.get_product_byid({id}).then( response => {
            
            let productToEdit = response[0]
            

            name = name || productToEdit.name
            price = price || productToEdit.price
            imgurl = imgurl || productToEdit.imgurl
            
            db.update_product({id, name, price, imgurl}).then( response2 => {
                // console.log(response2)
                res.status(200).send(response2)
            })
        })
    }

}