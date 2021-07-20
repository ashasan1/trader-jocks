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
		team: [Team]!
  }

  type Team {
    _id: ID
    teamCity: String
    teamName: String
    teamLogo: String
    createdAt: String
  }

  type Query {
    leagues: [League]!
    league(leagueId: ID!): League
    leagueByInitials(initials: String!): League
  }

  type Auth {
	  token: ID!
	  user: User
  }

  type Mutation {
    addLeague(leagueIntials: String!, leagueName: String!, leagueLogo: String): League
    addTeam(leagueId: ID!, teamCity: String!, teamName: String!, teamLogo: String!): League
    removeLeague(leagueId: ID!): League
    removeTeam(leagueId: ID!, teamId: ID!): League
	 addUser(username: String!, password: String!, email: String!): Auth
  }
`;

module.exports = typeDefs;
