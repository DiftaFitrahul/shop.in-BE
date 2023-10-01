const {registerSupplier} = require('../controllers/supplier');
const {Router} = require('express');
const router = Router();

router.post('/register', registerSupplier)

module.exports = router;