const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
})
app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'HOME PAGE',
		welcomeMessage: 'Hello Time Traveler!!!',
	})
})

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About PAGE',		
	})
})

app.get('/bad', (req, res) => {
	res.send([{
		errorMessage: 'unable to handle request'
	}])
})

var port = proccess.env.PORT || 3000; 
app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
	
});


