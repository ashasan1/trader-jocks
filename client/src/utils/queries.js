import gql from 'graphql-tag';

 export const CAROUSEL_ITEMS = gql`
	{
		getCarouselItems {
			_id
			imageURL
		}
	}
`;

	export const USER_ITEMS = gql`
	{
		query getUserItems {
			user {
			_id
			username
			items {
				# _id
				title
				description
				imageURL
				price
				playerName
				playerSoundex
			}
			createdAt
			}
		}
	}
 `;


 export const ITEMS_SOUNDEX = gql`
 {
	 query getItemsByPlayerSoundex {
		 items {
			 # _id
			 title
			 description
			 imageURL
			 price
			 playerName
			 playerSoundex
		 }
	 }
 }
`; 