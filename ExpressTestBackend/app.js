let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');
//import Contact Model from ./models
let Contact = require('./models/contact.js');
//initialize express app
let app = express();
//configure express app to parse json content and form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configure express app to serve static files
app.use(express.static(path.join(__dirname, 'public')));
//connect to mongodb instance where database is mydb
mongoose.connect('mongodb://127.0.0.1:27017/mydb');

//save new contact
app.post('/contactapi', (req, res, next) => {
 //create new contact using schema
 let newContact = new Contact({
   firstname: req.body.firstname,
	 lastname: req.body.lastname,
	 zipcode: req.body.zipcode,
	 city: req.body.city,
	 street: req.body.street,
	 housenumber: req.body.housenumber,
	 phone: req.body.phone,
	 email: req.body.email
	 })
 //save new contact to db
 newContact.save((err, result) => {
   if (err) { console.log(err) }
   else { res.json(result) }
 })
});

app.get('/contactapi', (req, res, next) => {
  //use find() method to return all contacts
  Contact.find((err, result) => {
    if(err) { console.log(err) }
    else { res.json(result) }
  })
});

app.post('/contactapi/search', (req, res, next) => {
	Contact.findOne(req.body).exec((err, result) => {
		if(err) { console.log(err) }
		else { res.json(result) }
	})
});

//listen on port 3000
app.listen(3000, () => {
 console.log('Server listening on port 3000')
});
