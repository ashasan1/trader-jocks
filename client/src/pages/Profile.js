import React, {useState} from "react";
import { useQuery } from "react-query";
import { gql } from '@apollo/client'
import "../index.css";
import { USER_ITEMS } from "../utils/queries";
  




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
            <img id="searchitemimage" src={data.getUserItems.user}></img>
            <p id="searchitemdescription">{data}</p>
            <p>Price:{data}</p>
          </div>
        </div>
      </div>
    // </>
  );
}

export default UserProfile;
