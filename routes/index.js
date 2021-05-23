const express = require('express');
const router = express.Router();
const limit = require('express-limit').limit;


/* GET home page. */
router.get('/', limit({
  max:    5,        // 5 requests
  period: 60 * 1000 // per minute (60 seconds)
}), function(req, res, next) {
  res.render('index', { product_1: 'Kapping-Gel' , price_1: 1500,
                        product_2: 'Semi-Permanente', price_2: 175});
});

module.exports = router;
