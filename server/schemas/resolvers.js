const { League } = require('../models');
const { Team } = require('../models');
const User = require('../models/User');

const resolvers = {
	Query: {
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
		}
				
		// leagueByTeamId: async (parent, { teamId }) => {
		// 	return League.findOne({ team_id: teamId });
		// }
	},

	Mutation: {
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

		addUser: async (parent, { name, email, password }) => {
			const newUser = await User.create({ username, email, password });
			const token = signToken(newUser);
			return { token, newUser };
		}

	},
};

module.exports = resolvers;
