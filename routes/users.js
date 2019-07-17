const router = require('express').Router();
const usersController = require('../controllers/usersController');


router.get('/:page', usersController.getUsers);
router.get('/', usersController.getTotal);

module.exports = router;