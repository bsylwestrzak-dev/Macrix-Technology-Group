const { Router } = require('express');
const userController = require('../controllers/userController');

const route = Router();

route.get('/users', userController.get_users);
route.post('/submitUsers', userController.submit_users)

module.exports = route;