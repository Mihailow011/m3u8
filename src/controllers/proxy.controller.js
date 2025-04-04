const { processM3U8 } = require('../services/m3u8.service');

// Handle POST request from form
exports.handleProxyRequest = async (req, res) => {
    try {
        const { origin, referer, m3u8Url } = req.body;
        
        if (!m3u8Url) {
            return res.status(400).send('M3U8 URL is required');
        }

        const processedContent = await processM3U8(m3u8Url, { origin, referer });
        
        res.type('application/vnd.apple.mpegurl');
        res.send(processedContent);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
};

// Handle GET request from generated link
exports.handleProxyGet = async (req, res) => {
    try {
        const { origin, referer, m3u8Url } = req.query;
        
        if (!m3u8Url) {
            return res.status(400).send('M3U8 URL is required');
        }

        const processedContent = await processM3U8(m3u8Url, { origin, referer });
        
        res.type('application/vnd.apple.mpegurl');
        res.send(processedContent);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
};