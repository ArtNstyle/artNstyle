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