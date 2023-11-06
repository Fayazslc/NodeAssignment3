const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-products', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-products.html'));
});

// /admin/add-product => POST
router.post('/products', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;