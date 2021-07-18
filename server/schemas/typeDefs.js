const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
		_id: ID
		title: String
		description: String
		imageURL: String
		price: String
  }

  type User {
		_id: ID
		username: String
		email: String
		items: [Item]
  }

	type League {
		_id: ID
		leagueInitials: String
		leagueName: String
		leagueLogo: String
		createdAt: String
		Teams: [Team]!
  }

  type Team {
    _id: ID
    cityName: String
    teamName: String
    teamLogo: String
    createdAt: String
  }

  type Query {
    leagues: [League]!
    league(leagueId: ID!): League
  }

  type Mutation {
    addLeague(leagueIntials: String!, leagueName: String!, leagueLogo: String): League
    addTeam(leagueId: ID!, teamCity: String!, teamName: String!, teamLogo: String!): League
    removeLeague(leagueId: ID!): League
    removeTeam(leagueId: ID!, teamId: ID!): League
  }
`;

module.exports = typeDefs;
