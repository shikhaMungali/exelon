const express = require('express');
const router = express.Router();
const { processImage } = require('../controllers/imageController');
const upload = require('../services/uploadService');

// ===================== api/process-image
router.post('/process-image', upload.single('image'), processImage);

module.exports = router;
