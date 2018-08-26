const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.end('Main About Page');
});

router.get('/us', function(req, res) {
	res.end('About Us Page');
});

router.get('/product', function(req, res) {
	res.end('About Product Page');
});

module.exports = router;
