const { Schema, model } = require('mongoose');

const User = model('USER', userSchema);
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
    owner: {
        type: ObjectId,
        index: true,
        required: true,
        ref: User
    }
});

const Item = model('Item', itemSchema);

module.exports = Item;