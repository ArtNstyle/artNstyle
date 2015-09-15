	//Modules
	var express = require('express');
	var bodyParser = require('body-parser');
	var cors = require('cors');
	var mongoose = require('mongoose');

	//initiate app
	var app = express();
	//middleware
	app.use(bodyParser.json());
	//app.use(express.static(__dirname + '/Public'));
	app.use(cors());



	// Register the callback to be fired every time auth state changes


	//port
var artistCtrl = require('./backEndControllers/artistCtrl');

app.post('/api/artists', artistCtrl.create);
app.get('/api/artists/all', artistCtrl.readAll);
app.get('/api/artists', artistCtrl.read);
app.put('/api/artists', artistCtrl.update);
app.delete('/api/artists', artistCtrl.remove);

var cartCtrl = require('./backEndControllers/cartCtrl');

app.post('/api/cart', cartCtrl.create);
app.get('/api/cart', cartCtrl.read);
app.put('/api/cart', cartCtrl.update);
app.delete('/api/cart', cartCtrl.remove);

var eventCtrl = require('./backEndControllers/eventCtrl');

app.post('/api/events', eventCtrl.create);
app.get('/api/events/all', eventCtrl.readAll);
app.get('/api/events', eventCtrl.read);
app.put('/api/events', eventCtrl.update);
app.delete('/api/events', eventCtrl.remove);

var stylistCtrl = require('./backEndControllers/stylistCtrl');

app.post('/api/stylists', stylistCtrl.create);
app.get('/api/stylists/all', stylistCtrl.readAll);
app.get('/api/stylists', stylistCtrl.read);
app.put('/api/stylists', stylistCtrl.update);
app.delete('/api/stylists', stylistCtrl.remove);





	//controllers
	// var artistCtrl = require('./backEndControllers/artistCtrl');
	
	
	

	// app.get('/api/userName', bookCtrl.getId);
	
	
	
	
	//app.post('/api/stylists', stylistCtrl.create);
	//app.post('/api/carts', cartCtrl.create);
	
	
	
	
	
	
	
	//app.get('/api/carts/all', cartCtrl.readAll);

	//app.get('/api/stylists/all', t.readAll);


	// app.get('/api/readBooks/all', readCtrl.getAll);
	
	
	
	
	
	
	

	//app.delete('/api/stylits/:id', stylistCtrl.remove);

	//port
	var nodeport =3000;
	mongoUri = 'localhost: 27017/order'
	mongoose.connect(mongoUri, function(err) {
	    if (err) {
	        return console.log(err);
	    }
	    console.log("Connecting to mongo on...", mongoUri);

	    app.listen(nodeport, function() {
	        console.log('listening on', nodeport)
	    });

	});