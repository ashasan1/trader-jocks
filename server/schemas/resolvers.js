
const { Item, League, Team, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		items: async () => {
			return Item.find().sort({ title: 1 });
		},

		leagues: async () => {
			return League.find().sort({ leagueInitials: 1 }).populate('teams');
		},

		league: async (parent, { leagueId }) => {
			return League.findOne({ _id: leagueId }).populate('teams');
		},
		
		leagueByInitials: async (parent, { initials }) => {
			return League.findOne({ leagueInitials: initials }).populate('teams');
		},

		team: async () => {
			return Team.find();
		},

		users: async () => {
			return User.find().sort({ username: 1 }).populate('items');
		},
		
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId }).populate('items');
		},
		
		userByUserName: async (parent, { userName }) => {
			return User.findOne({ username: userName }).populate('items');
		},

	},

	Mutation: {
		addItem: async (parent, { title, description, imageURL, price, playerName, playerSoundex }) => {
			return Item.create({ title, description, imageURL, price, playerName, playerSoundex });
		},
		addLeague: async (parent, { leagueInitials, leagueName, leagueLogo }) => {
			return League.create({ leagueInitials, leagueName, leagueLogo });
		},
		addTeam: async (parent, { leagueId, teamCity, teamName, teamLogo }) => {
			return League.findOneAndUpdate(
				{ _id: leagueId },
				{
					$addToSet: { teams: { teamCity, teamName, teamLogo } },
				},
				{
					new: true,
					runValidators: true,
				}
			);
		},
		addUser: async (parent, { username, email, password }) => {
			const newUser = await User.create({ username, email, password });
			const token = signToken(newUser);
			return { token, newUser };
		},
		removeItem: async (parent, { itemId }) => {
			return Item.findOneAndDelete({ _id: itemId });
		},
		removeLeague: async (parent, { leagueId }) => {
			return League.findOneAndDelete({ _id: leagueId });
		},
		removeTeam: async (parent, { leagueId, teamId }) => {
			return League.findOneAndUpdate(
				{ _id: leagueId },
				{ $pull: { teams: { _id: teamId } } },
				{ new: true }
			);
		},
		removeUser: async (parent, { userId }) => {
			return User.findOneAndDelete({ _id: userId });
		},
		loginUser: async (parent, { username, password }) => {
			const user = await User.findOne({ username });
			if (!user) throw new AuthenticationError('Incorrect Username');
			const passwordCheck = await user.checkPassword(password);
			if (!passwordCheck) throw new AuthenticationError('Incorrect Password');

			// if it gets here, the user has entred a good username/password combo
			const token = signToken(user);
			return { token, user };
		}
	},
};

module.exports = resolvers;