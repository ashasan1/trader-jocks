import React from 'react';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'

function Item() {
    return (
        <>
       <div className="container">
           <div className="row">
               
                
                 <div className="col-md">
                     <h2 id="offerh2">Make an Offer</h2>
                     <textarea id="offertext"></textarea>
                     <button id="submitoffer"className="btn">Submit</button>
                 </div>

               <div className="col-md">
                     <div id="item">
                         <img id="itemimage" src="https://upperdeckstore.com/media/catalog/product/cache/cca31960a2955b031df57569d9e7c7f0/m/i/michael-jordan-signed-red-jersey-52819_4.jpg"id="itemimage"></img>
                         <p>Item Description:</p>
                         <p>Wjweoafjkfemf eofewaf mklfewf ewafemfkel fwkenf efa welkfm lew efamjw ekf efji efmkef Wjweoafjkfemf eofewaf mklfewf ewafemfkel fwkenf efa welkfm lew efamjw ekf efji efmkef Wjweoafjkfemf eofewaf mklfewf ewafemfkel fwkenf efa welkfm lew efamjw ekf efji efmkef Wjweoafjkfemf eofewaf mklfewf ewafemfkel fwkenf efa welkfm lew efamjw ekf efji efmkef</p>
                     </div>
                 </div>

           </div>
       </div>
        </>

    );
}


export default Item;
