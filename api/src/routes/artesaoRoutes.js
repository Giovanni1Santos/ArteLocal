const express = require('express');
const router = express.Router();
const controller = require('../controllers/artesaoController');

router.post('/register', controller.registrar);
router.post('/login', controller.login);
router.get('/', controller.listar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);

module.exports = router;
