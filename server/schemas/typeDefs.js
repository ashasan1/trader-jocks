const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
		_id: ID
		title: String
		description: String
		imageURL: String
		price: String
    team: [Team]!
  }

  type User {
		_id: ID
		username: String
		email: String
		items: [Item]!
		createdAt: String
  }

	type League {
		_id: ID
		leagueInitials: String
		leagueName: String
		leagueLogo: String
		teams: [Team]!
		createdAt: String
  }

  type Team {
    _id: ID
    teamCity: String
    teamName: String
    teamLogo: String
    createdAt: String
  }

  type Query {
    items: [Item]!
    leagues: [League]!
    league(leagueId: ID!): League
    leagueByInitials(initials: String!): League
    teams: [Team]
    team(id: ID!): [Team]
    user(userId: ID!): [User]
    userByUserName(userName: String!): User
  }

  type Auth {
	  token: ID!
	  user: User
  }

  type Mutation {
    addLeague(leagueIntials: String!, leagueName: String!, leagueLogo: String): League
    addTeam(leagueId: ID!, teamCity: String!, teamName: String!, teamLogo: String!): League
    addItem(title: String!, description: String!, imageUrl: String, price: String): Item
	  addUser(username: String!, password: String!, email: String!): Auth
    removeLeague(leagueId: ID!): League
    removeTeam(leagueId: ID!, teamId: ID!): League
    removeItem(itemId: ID!): Item
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
