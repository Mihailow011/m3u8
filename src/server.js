require('dotenv').config();
const express = require('express');
const proxyRoutes = require('./routes/proxy.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/', proxyRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});