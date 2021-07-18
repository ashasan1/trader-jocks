const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');

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

// hash password with bcrypt before saving
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	 }

	next();
});

userSchema.methods.checkPassword = async function(password) {
	return bcrypt.compare(password, this.password);
}

const User = model('User', userSchema);

module.exports = User;
