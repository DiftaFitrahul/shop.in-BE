const {registerSupplier, addProducts} = require('../controllers/supplier');
const {Router} = require('express');
const router = Router();

router.post('/register', registerSupplier)
router.post('/product', addProducts)

module.exports = router;