
const { Category, Item, League, Team, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
var mongoose = require('mongoose');
const { soundex } = require('../utils/soundex');


const resolvers = {
	Query: {
		categories: async () => {
			return Category.find().sort({ name: 1 });
		},

		items: async () => {
			return Item.find().sort({ title: 1 });
		},

		getSearchItems: async (parent, { searchCriteria }) => {
			console.log(searchCriteria);
			const searchSoundex = soundex(searchCriteria);
			console.log(searchSoundex);
			return Item.find({ playerSoundex: searchSoundex }).sort({ createdAt: -1 });
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
		getCarouselItems: async () => {
			return Item.find().sort({ createdAt: -1}).limit(5);
		},
		getUserItems: async (parent, { userId }) => {
			return User.findOne({ _id: userId }).populate('items');
		},
		getItemsByPlayerSoundex: async (parent, { playerSoundex }) => {
			return Item.find({ playerSoundex: playerSoundex }).sort({ createdAt: -1 })
		}
	},

	Mutation: {
		addItem: async (parent, { title, description, imageURL, price, playerName, playerSoundex}, context) => {
			try {
				const newItem = await Item.create({ title, description, imageURL, price, playerName, playerSoundex });
				const newItemId = newItem._id;
				const updatedUser = await User.findOne({_id: context.user._id})
				updatedUser.items.push(newItemId);
				await updatedUser.save();
				return updatedUser; 
			} catch(err) {
				console.log(err);
			}
		},
		// addItemToUser: async(parent, {item_id}, context) => {
		// 	return User.findOneAndUpdate({_id: context.user._id},
		// 		{
		// 			$addToSet: {items: {item_id}}
		// 		})
		// },
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
		removeCategory: async (parent, { categoryId }) => {
			return Category.findOneAndDelete({ _id: categoryId });
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