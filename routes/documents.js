const express = require('express');
const documentController = require("../controller/documentController");
const router = express.Router();

router.get('/', documentController.get);

module.exports = router;