const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.SERVER_PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(cors())

app.use(userRoutes);

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    })
    .catch(err => console.log(err));