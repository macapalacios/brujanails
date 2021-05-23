const express = require('express');
const router = express.Router();

// DomPurify
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);
// Fin DomPurify

require('dotenv').config()

const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_PROD
});


/* POST checkout listing. */
router.post('/', function(req, res, next) {
  
  let price = DOMPurify.sanitize(req.body.price);
  let title = DOMPurify.sanitize(req.body.title);
  
  let preference = {
    items: [
      {
        title: title,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: parseFloat(price)
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

  res.redirect(DOMPurify.sanitize(response.body.init_point));

 }).catch(function(err){
   console.log(err)
 });

});

module.exports = router;
