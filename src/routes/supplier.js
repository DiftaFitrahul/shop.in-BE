const {registerSupplier, addProducts, editProduct} = require('../controllers/supplier');
const {Router} = require('express');
const router = Router();

router.post('/register', registerSupplier);
router.post('/product', addProducts);
router.put('/product', editProduct)

module.exports = router;