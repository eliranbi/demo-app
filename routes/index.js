var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eliran' });
});

router.get('/index', function(req, res, next) {
  res.render('contracts', { title: 'Eliran' });
});

router.get('/contracts', function(req, res, next) {
  res.render('contracts', { title: 'Eliran' });
});

router.get('/reconciles', function(req, res, next) {
		var items = [
			{
				"contractId" : "100021011",
				"companyName" : "Oil&Gas",
				"dates" : "2017/01/01 - 2017/02/01",
				"price" : "$50.00",
				"volume" : "10,000",
				"actual" : "10,000",
				"total" : "$500,000",
				"status" : "Approved For Payment"
			},{
				"contractId" : "100021011",
				"companyName" : "Oil Inc",
				"dates" : "2017/01/01 - 2017/02/01",
				"price" : "$50.00",
				"volume" : "10,000",
				"actual" : "10,000",
				"total" : "$500,000",
				"status" : "Approved For Payment"
			}
			]
  res.render('reconciles', { title: 'Eliran', items:items });
});

router.get('/payments', function(req, res, next) {
  res.render('payments', { title: 'Eliran' });
});

router.get('/submit', function(req, res, next) {
  res.render('submit', { title: 'Eliran' });
});

router.get('/history', function(req, res, next) {
  res.render('history', { title: 'Eliran' });
});
module.exports = router;
