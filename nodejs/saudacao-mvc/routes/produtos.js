const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get('/cadastro', produtosController.cadastro);
router.post('/cadastro', produtosController.cadastrado);

module.exports = router;