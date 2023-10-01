const {registerCustomer} = require('../controllers/customer');
const {Router} = require('express');
const router = Router();

router.post('/register', registerCustomer)

module.exports = router;