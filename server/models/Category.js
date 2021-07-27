const { Schema, model } = require('mongoose');

const itemSchema = new Schema({

	name: {
		type: String,
		required: 'Must enter a name of the category.',
		trim: true
	},
	subcategories: [
		{
		  type: String,
		  trim: true
		},
	  ],
    createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	  }
});

const Category = model('Category', categorySchema);

module.exports = Category;