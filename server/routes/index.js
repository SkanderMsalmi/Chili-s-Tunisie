var express = require('express');
var router = express.Router();
const menu = require('./menu');
const items = require('./items')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Chilis' });
});

router.use('/menu', menu);
router.use('/items', items);

module.exports = router;
