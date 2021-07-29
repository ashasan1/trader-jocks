import React from "react";
import { useQuery } from "@apollo/client";
import "../index.css";
import { USER_ITEMS } from "../utils/queries";
import {
  Carousel,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
  Navbar,
  NavDropdown,
  Nav,
  Modal,
  Tab,
} from "react-bootstrap";
import Auth from '../utils/auth';


function UserProfile() {
  const userProfile = Auth.getProfile();
  const userId = userProfile.data._id;
//   const userId = "60ff5b4f9037e8f3d5b8c788";
  const { loading, data } = useQuery(USER_ITEMS, {
    variables: { userId: userId },
  });

  const myUser = data?.getUserItems || "omari";
//   console.log("my user =" + myUser);
//   console.log("data =" + data);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>

<div className="container profileheader">
 
            <div className="profileheadercontainer">
                 <h1 id="profileh1">My Profile</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h1 id="profilemyitems">My Items</h1>
                    </div>
                    <div className="col-md">
                        <Button href="/additem" id="additem">Add Item</Button>
                    </div>
                

                </div>
                
                </div>


      <div className="container">
        <div className="row">
          <div>
            <h3 className="searchheader">Items</h3>
          </div>

          <div className="container">
            <div className="row">
              {data.getUserItems.items.map((item) => {
                return (
                  <div id="searchitem">
                    <img style={{ width: "200px" }} src={item.imageURL} />
                    <p id="searchitemdescription">{item.playerName}</p>
                    <p id="searchitemdescription">{item.description}</p>
                    <p id="searchitemdescription">Price: {item.price}</p>
                  </div>
                );
              })}
          </div>

          </div>

          

        </div>
      </div>
      //{" "} 
      </div>
    </>
  );
}

export default UserProfile;
