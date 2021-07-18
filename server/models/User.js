const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const itemSchema = require('./Item');

const userSchema = new Schema({
	
	username: {
		type: String,
		required: 'User must have a username.',
		trim: true
	},
	email: {
		type: String,
		required: 'User must have an email.',
		match: [/.+@.+\..+/, 'Must use a valid email address'],
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: 'User must have a password.'
	},
	items: [itemSchema]

});

const User = model('User', userSchema);

module.exports = User;
