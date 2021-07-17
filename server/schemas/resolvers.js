const { League } = require('../models');

const resolvers = {
  Query: {
    leagues: async () => {
      return League.find().sort({ createdAt: -1 });
    },

    league: async (parent, { leagueId }) => {
      return League.findOne({ _id: leagueId });
    },
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
  },
};

module.exports = resolvers;
