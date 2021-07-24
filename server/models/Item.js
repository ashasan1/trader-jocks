const { Schema, model } = require('mongoose');

const itemSchema = new Schema({

	title: {
		type: String,
		required: 'Item must have a title.',
		trim: true
	},
	description: {
		type: String,
		required: 'Item must have a description.',
		trim: true
	},
	imageURL: {
		type: String,
		required: 'Item must have an image URLl',
	},
	price: {
		type: String,
		required: 'Item must have a price.',
		trim: true
	},
	team: [
		{
		  type: Schema.Types.ObjectId,
		  ref: 'Team'
		},
	  ],
	  createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	  }
});

const Item = model('Item', itemSchema);

module.exports = Item;
