import gql from "graphql-tag";

export const CAROUSEL_ITEMS = gql`
  {
    getCarouselItems {
      _id
      imageURL
    }
  }
`;

export const USER_ITEMS = gql`
  query getUserItems($userId: ID!) {
    getUserItems(userId: $userId) {
        _id
        username
        items {
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
`;

export const ITEMS_SOUNDEX = gql`
  query getItemsByPlayerSoundex($playerSoundex: String!) {
    getItemsByPlayerSoundex(playerSoundex: $playerSoundex) {
      items {
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
