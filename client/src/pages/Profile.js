import React from 'react';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'


function Profile() {
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

                    <div className="container" id="profileitem">
                        <div className="row">
                            <img id="profileitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                         <p id="profileitemdescription"> Micheal Jordan Basketball signed in 2006</p>
                        </div>
                     </div>
                     

                     <div className="container" id="profileitem">
                        <div className="row">
                            <img id="profileitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                         <p id="profileitemdescription"> Micheal Jordan Basketball signed in 2006</p>
                        </div>
                     </div>

                     <div className="container" id="profileitem">
                        <div className="row">
                            <img id="profileitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                         <p id="profileitemdescription"> Micheal Jordan Basketball signed in 2006</p>
                        </div>
                     </div>

                     <div className="container" id="profileitem">
                        <div className="row">
                            <img id="profileitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                         <p id="profileitemdescription"> Micheal Jordan Basketball signed in 2006</p>
                        </div>
                     </div>

                 <div className="container" id="profileitem">
                        <div className="row">
                            <img id="profileitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                         <p id="profileitemdescription"> Micheal Jordan Basketball signed in 2006</p>
                        </div>
                     </div>
                


                    
                </div>


               
             
            </div>
            
        </div>
       
        </>

    );
}


export default Profile;