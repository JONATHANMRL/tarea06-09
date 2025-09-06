// src/routes/procesos.router.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/procesos.controller');

router.get('/', controller.index);

module.exports = router;
