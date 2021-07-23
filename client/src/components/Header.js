import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Header () {
    return (
        <>
    <div className="container customheader">
      <Jumbotron>
        <h1 id="traderjocksheader" className="display-3">Trader Jocks</h1>
        <p className="lead headerp">Sports Memorabilia trading site. Buy and Sell your favorite collectables with fellow sports fans.</p>
        <hr className="my-2 headerp" />
      </Jumbotron>
    </div>
        </>

    );
}


export default Header;