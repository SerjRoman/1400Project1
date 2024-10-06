const productService = require('../services/productService')

function getAllProducts(req, res) {
    const context = productService.getAllProducts()
    res.render('products', context)
}

function getProductById(req, res){
    console.log(req.params.id)
    const id = req.params.id
    const data = productService.getProductById(id)
    if (id <= data.length){
        res.render('product', data.context)
    } else{
        res.send("ban")
    }
}

function createProduct(req, res){
    const data = req.body
    console.log(data)
    productService.createProduct(data);
    res.send('okay');

}


module.exports = {
    getAllProducts: getAllProducts,
    getProductById: getProductById,
    createProduct: createProduct
}