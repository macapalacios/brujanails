var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { product_1: 'Kapping-Gel' , price_1: 1500.85, product_2: 'Semi-Permanente', price_2: 175.50});
});

module.exports = router;
