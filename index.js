const express = require('express');
const mongoose = require('mongoose');

const app = express();
const urlRoutes = require('./routes/urlRoute');

app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
mongoose.connect('mongodb://localhost:27017/url_shortner')
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Database connection failed', err);
    });

// Routes
app.use('/api', urlRoutes);

const Port = 3000;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});