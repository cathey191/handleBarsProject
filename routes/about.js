const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('about/index', {
		title: 'About'
	});
});

router.get('/us', function(req, res) {
	res.render('about/us', {
		title: 'About Us'
	});
});

router.get('/product', function(req, res) {
	res.render('about/product', {
		title: 'About Product'
	});
});

module.exports = router;
