const express = require('express');
const router = express.Router();

const clinicasController = require('../controllers/clinicasController');

router.get('/clinicasveterinarias', clinicasController.clinicas);
router.get('/search', clinicasController.search);

module.exports = router;