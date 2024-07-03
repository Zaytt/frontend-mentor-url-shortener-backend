const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRoutes');
const urlSchema = require('./models/url');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/urlshortener').then(() => {
  console.log('MongoDB connected');
  // Ensure indexes are created
  urlSchema.createIndexes();
}).catch(err => console.error(err));;

// app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.use('/api/url', urlRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});