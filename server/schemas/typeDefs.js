const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Item {
		_id: ID
		title: String
		description: String
		imageURL: String
		price: String
    playerName: String
    playerSoundex: String
    team: Team
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
  type User {
		_id: ID
		username: String
		email: String
		items: [Item]!
		createdAt: String
  }
  type Query {
    items: [Item]!
    leagues: [League]!
    league(leagueId: ID!): League
    leagueByInitials(initials: String!): League
    teams: [Team]
    team(id: ID!): [Team]
    users: [User]!
    user(userId: ID!): User
    userByUserName(userName: String!): User
  }
  type Auth {
	  token: String
	  user: User
  }
  type Mutation {
    addItem(title: String!, 
      description: String!, 
      imageURL: String, 
      price: String,
      playerName: String,
      playerSoundex: String): Item
    addItemToUser(item_id: ID!): User
    addLeague(leagueIntials: String!, leagueName: String!, leagueLogo: String): League
    addTeam(leagueId: ID!, teamCity: String!, teamName: String!, teamLogo: String!): League
	 addUser(username: String!, password: String!, email: String!): Auth
	 loginUser(username: String!, password: String!): Auth
    removeItem(itemId: ID!): Item
    removeLeague(leagueId: ID!): League
    removeTeam(leagueId: ID!, teamId: ID!): League
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;