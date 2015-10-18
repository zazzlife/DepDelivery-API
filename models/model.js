var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var personSchema = new Schema({
	name: String,
	locationName : String,
	dateAdded : { type: Date, default: Date.now },
	phoneNumber: String,
	aptNumber: String,
	streetAddress: String,
	emailAddress: String,
	postalCode: String,
	order: String
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Person',personSchema);
