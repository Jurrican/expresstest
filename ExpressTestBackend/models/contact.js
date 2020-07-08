//Import of libraries
let mongoose = require('mongoose');

//Definition of Contact Schema
let contactSchema = mongoose.Schema({
  id: Number,
	firstname: String,
	lastname: String,
	zipcode: String,
	city: String,
	street: String,
	housenumber: String,
	phone: String,
	email: String
}, 
//Which collection Contact Schema belongs to
{ collection: 'contacts' });

let Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;