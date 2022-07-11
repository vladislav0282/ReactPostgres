const Router =require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
const chekRole = require('../middlewere/chekRoleMiddlewere')


router.post('/', chekRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)


module.exports = router