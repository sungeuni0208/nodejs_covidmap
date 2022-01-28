var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.render('index', { title: 'Express' });
});
//화살표 함수
router.get('/upload', (req, res, next) => {
  res.render('upload');
});

module.exports = router;
