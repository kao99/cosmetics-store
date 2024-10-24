
const express = require('express');
const mongoose = require('mongoose');
const productPipeline = require('./productRoutes');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

mongoose.connect('mongodb://localhost/cosmetics_shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected for cosmetics shop'))
  .catch((err) => console.error('Database connection error', err));

app.use('/api/products', productPipeline);

app.listen(port, () => {
  console.log(`Cosmetics Shop API running on port ${port}`);
});
