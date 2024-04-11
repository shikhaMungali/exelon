const Image = require('../models/imageModel');
const { processImage } = require('../services/imageProcessingService');

exports.processImage = async (req, res) => {
    try {
        let { width, height, quality, format } = req.query;
        const imagePath = req.file.path;
        let options = {};
        if (width) options.width = Number(width);
        if (height) options.height = Number(height);
        if (quality) options.quality = Number(quality);
        if (format) options.format = format;

        const imageData = await processImage(imagePath, options);

        const savedImage = new Image({
            data: imageData,
            contentType: `image/${options.format || 'jpeg'}`,
        });
        await savedImage.save();

        res.status(200).send('Image processed and saved successfully!');
    } catch (error) {
        throw new Error(`${error}`);
    }
};
