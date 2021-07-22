import React from "react";
import '/Users/mari/gt-bootcamp/Projects/Project 3/client/src/myProfile.css'
import  logo from '/Users/mari/gt-bootcamp/Projects/Project 3/client/src/assets/images/WNBA/Minnesota_Lynx.png'

function MyProfileBody() {
  return (
    <body>
      <div id="body" className="container flex">
        <div className="items">
          <img src={logo} alt="" />
          <button className="info">I</button>
        </div>
      </div>
    </body>
  );
}
export default MyProfileBody;