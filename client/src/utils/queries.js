import gql from 'graphql-tag';
 export const CAROUSEL_ITEMS = gql`
	{
		getCarouselItems {
			_id
			imageURL
		}
	}
 `;