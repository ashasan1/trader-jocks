import React from "react";
import { useQuery, gql } from "@apollo/client";
// import queries, { USER_ITEMS } from '../utils/queries'

import {
  Carousel,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import "../index.css";

const USER_ITEMS = gql`
  {
    query
    getUserItems {
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

function UserProfile() {
  const { data } = useQuery(USER_ITEMS);

  return (
    <>
      <div>
        <h1>My Items</h1>
      </div>

      <div className="container">
        <div className="row">
          <div>
            <h3 className="searchheader">Items</h3>
          </div>

          <div id="searchitem">
            <img id="searchitemimage" src={data.getUserItems.user.items.imageURL}></img>
            <p id="searchitemdescription">{data}</p>
            <p>Price:{data}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
