var express = require('express');
var router = express.Router();
const menu = require('./menu');


/* GET home page. */
router.get('/api', function (req, res, next) {
  res.json({ title: 'Express' });
});

router.use('/api/menu', menu);

module.exports = router;
