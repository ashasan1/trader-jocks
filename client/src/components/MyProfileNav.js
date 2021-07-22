import React from "react";
import '/Users/mari/gt-bootcamp/Projects/Project 3/client/src/myProfile.css'

function MyProfileNav() {
  return (
   <div id="main">
    <div>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="#">
          TRADER JOCKS
        </a>
        <button id="offers">My Offers</button>
        <button id="logout">logout</button>
      </nav>
    </div>
  </div>
  );
}

export default MyProfileNav;
