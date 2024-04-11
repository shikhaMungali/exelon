const Image = require('../models/imageModel');
// const { processImage } = require('../services/imageProcessingService');

exports.processImage = async (req, res, next) => {
    try {
        const { width, height, quality, format } = req.body;
        const imagePath = req.file.path;
        // const imageData = await processImage(imagePath, { width, height, quality, format });
        
        const savedImage = new Image({
            data: imageData,
            contentType: `image/${format || 'jpeg'}`,
        });
        await savedImage.save();

        res.send('Image processed and saved successfully!');
    } catch (error) {
        next(error); 
    }
};
