import { gql } from '@apollo/client';

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation loginUser($username: String!, $password: String!) {
		loginUser(username: $username, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;


export const ADD_ITEM = gql`
	mutation addItem($title: String!, $description: String!, $imageURL: String, $price: String, $playerName: String, $playerSoundex: String) {
		addItem (title: $title, description: $description, imageURL: $imageURL, price: $price, playerName: $playerName, playerSoundex: $playerSoundex) {
		_id
		title	
		}
	}

`;