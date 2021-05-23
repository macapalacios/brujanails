const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { product_1: 'Kapping-Gel' , price_1: 1500,
                        product_2: 'Semi-Permanente', price_2: 175});
});


module.exports = router;
