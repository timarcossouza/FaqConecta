var app = require('express');  
var http = require('http').Server(app);
var router = express.Router();
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

var mailer = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'conectaclientesenvio@gmail.com',
		pass: 'conectaenvio'
	}
});

mailer.use('compile', hsb({
	viewPath: 'views/email',
	extName: '.hbs'
}));


router.get('/', function(req, res, next) {
	res.render('index', {title: 'Express'});
});

router.get('/sendmail', function(req, res, next) {

	mailer.sendmail({
		from: 'bianca.rocha1711@gmail.com',
		to: 'bianca.rocha.lol@gmail.com',
		subject: 'FUNCIONOU CARAI',
		template: 'recover',
		context: {}
	}, function(err, response) {
		if(err) {
			res.send("bad email");
		}

		res.send("good email");
	}

	)
})


router.get('/', function(req, res) {
	res.send('ok')
})

module.exports = router;