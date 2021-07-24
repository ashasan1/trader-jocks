import React from 'react';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'

let searchCondition = {
  didSearch: false

};


function Home() {
  if (searchCondition.didSearch === true) {

    return (
      <>
     <div>
         <h1>Search</h1>
     </div>

     <div className="container">
         <div className="row">

             <div>
                 <h2 className="searchheader">Search Result</h2>
                 <h3 className="searchheader">MLB Items</h3>
             </div>
          

                 <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>

             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>

             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>

             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>

             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>
             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>
             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>
             <div id="searchitem">
                 <img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
                 <p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
             </div>


         </div>
     </div>
      </>
    
    );

  } else
  return (
        <>
       <div className="container">
           <div className="row">
               <div> 
                 <div className="col-md carouseldiv">
                   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 caroimage"
      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/basketball-close-up-on-black-background-martin-piechotta.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caroimage"
      src="https://media.istockphoto.com/photos/basketball-players-silhouettes-at-sunset-new-york-city-picture-id1008263732?k=6&m=1008263732&s=612x612&w=0&h=SdgdcyuVmfvzdBwy_igbY12yhD4blTGV6h_qOH4V7EM="
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caroimage"
      src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/baseball-in-black-and-white-leah-mcphail.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

                 </div>
               
               </div>
           </div>
       </div>
        </>

    );
}


export default Home;
