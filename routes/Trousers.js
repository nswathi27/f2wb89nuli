var express = require('express');
var router = express.Router();

/* GET Trousers page. */
router.get('/', function(req, res, next) {
  res.render('Trousers', { title: 'Search Results Trousers' });
});

module.exports = router;
