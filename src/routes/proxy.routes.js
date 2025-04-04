const express = require('express');
const { handleProxyRequest, handleProxyGet } = require('../controllers/proxy.controller');

const router = express.Router();

// Serve HTML form
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Handle form submission (POST)
router.post('/proxy', handleProxyRequest);

// Handle direct link access (GET)
router.get('/proxy', handleProxyGet);

module.exports = router;