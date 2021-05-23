const express = require('express');
const router = express.Router();

require('dotenv').config()

const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_PROD
});


/* POST checkout listing. */
router.post('/', function(req, res, next) {
  
let preference = {
  items: [
    {
      title: req.body.title,
      quantity: 1,
      currency_id: 'ARS',
      unit_price: parseFloat(req.body.price)
    }
  ],
  back_urls: {
      "success": "https://localhost:3443",
      "failure": "https://localhost:3443",
      "pending": "https://localhost:3443"
  },
  auto_return: 'approved'
};

mercadopago.preferences.create(preference)
 .then(function(response){

  res.redirect(response.body.init_point);

 }).catch(function(err){
   console.log(err)
 });

});

module.exports = router;
