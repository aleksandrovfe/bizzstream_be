const express = require('express');
const dateController = require("../controller/dataController");
const middleware = require("../middleware/validateData");
const router = express.Router();

router.post('/', middleware.validateData, dateController.save);

module.exports = router;