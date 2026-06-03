// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ChickenSchema = new Schema({
	// Simple declaration of datatype that will be used:
	id: 
	{type: String,
	required: true, 
    unique: true },
	name: String,
	age: Number,
    breed: String,

});

// Turn the schema you created into a "Model".
// mongoose.model("ModelNameSingular", modelSchema);
// "ModelNameSingular" will automatically be pluralized for you,
//and that pluralized version of the model name will also
//become the name of the MongoDB collection.
// Chicken is a collection in the MyMernApp database
module.exports = mongoose.model("chicken", ChickenSchema);
