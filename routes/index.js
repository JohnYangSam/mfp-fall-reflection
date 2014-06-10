var express = require('express');
var router = express.Router();

var cards = require('../models/cards');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MFP Fall Reflection', cards: cards.contents });
});

module.exports = router;
