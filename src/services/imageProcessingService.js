const sharp = require('sharp');

exports.processImage = async (imagePath, options) => {
    try {
        let image = sharp(imagePath);

        if (options.width && options.height) {
            image = image.resize(Number(options.width), Number(options.height));
        }

        if (options.quality) {
            image = image.jpeg({ quality: Number(options.quality) });
        }

        if (options.format) {
            image = image.toFormat(options.format);
        }

        return await image.toBuffer();
    } catch (error) {
        throw new Error(`Failed to process image : ${error}`);
    }
};
