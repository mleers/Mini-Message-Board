var express = require('express');
var router = express.Router();

// sample messages
let messages = [ {text: 'Marco', user: 'Nate', added: new Date().toLocaleString()},
{text: 'Polo', user: 'Sully', added: new Date().toLocaleString()}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date().toLocaleString() 
  });
  res.redirect('/');  //redirect to home after submitting msg
})


module.exports = router;
