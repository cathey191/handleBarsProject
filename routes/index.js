const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
	res.render('home/index', {
		title: 'Home'
	});
});

router.get('/home', function(req, res) {
	res.render('home/index', {
		title: 'Home'
	});
});

module.exports = router;
