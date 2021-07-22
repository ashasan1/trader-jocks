
const { Item, League, Team, User } = require('../models');

const resolvers = {
	Query: {
		items: async () => {
			return Item.find().sort({ title: 1 });
		},

		leagues: async () => {
			return League.find().sort({ leagueInitials: 1 }).populate('teams');
		},

		league: async (parent, { leagueId }) => {
			return League.findOne({ _id: leagueId });
		},
		
		leagueByInitials: async (parent, { initials }) => {
			return League.findOne({ leagueInitials: initials }).populate('teams');
		},

		team: async () => {
			return Team.find();
		},
		
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId });
		},
		
		userByUserName: async (parent, { usrName }) => {
			return League.findOne({ userName: usrName }).populate('items');
		},


				
		// leagueByTeamId: async (parent, { teamId }) => {
		// 	return League.findOne({ team_id: teamId });
		// }
	},

	Mutation: {
		addItem: async (parent, { title, description, imageURL, price }) => {
			return Item.create({ title, description, imageURL, price });
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
		addUser: async (parent, { name, email, password }) => {
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
		}
	},
};

module.exports = resolvers;
