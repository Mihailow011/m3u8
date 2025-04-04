const axios = require('axios');
const { ensureAbsoluteUrls } = require('../utils/urlHelpers');

exports.processM3U8 = async (m3u8Url, headers = {}) => {
    const response = await axios.get(m3u8Url, {
        headers: {
            Origin: headers.origin || '',
            Referer: headers.referer || '',
            'User-Agent': 'Mozilla/5.0'
        }
    });
    
    return ensureAbsoluteUrls(response.data, m3u8Url);
};