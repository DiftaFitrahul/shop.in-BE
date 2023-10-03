const {registerSupplier, addProducts, editProduct, deleteProduct} = require('../controllers/supplier');
const {Router} = require('express');
const router = Router();

router.post('/register', registerSupplier);
router.post('/product', addProducts);
router.put('/product', editProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router;