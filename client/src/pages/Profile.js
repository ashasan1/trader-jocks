import React from "react";
// import Auth from '../utils/auth';
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


function UserProfile() {

const { gql } = require('apollo-server-express');
const GetItemData = {
        query: {}
    }

    
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
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
            <p>
              Price:  
            </p>
          </div>

          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>

          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>

          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>

          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>
          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>
          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>
          <div id="searchitem">
            <img
              id="searchitemimage"
              src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"
            ></img>
            <p id="searchitemdescription">
              {" "}
              Micheal Jordan Basketball signed in 2006
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
