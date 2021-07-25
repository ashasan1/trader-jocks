import React from 'react';
import { useState } from 'react';
import { Carousel, Container, Col, Form, Button, Card, CardColumns, Navbar, NavDropdown, Nav, Modal } from 'react-bootstrap';
import '../index.css'
import { useHistory } from 'react-router-dom';







function TraderNavbar () {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  
  
    return (
        <>
        <div className="container">
          <div className="row">
            {/* <div id="traderlogocontainer" className="col-md">
              <img id="traderlogo" src="https://dev.digitalflorins.com/wp-content/uploads/2016/05/Placeholder-300x300.png"></img>
            </div> */}
            <div className="col-md">
              <Navbar id="tradernavbar" expand="lg">
  <Container>
    <Navbar.Brand id="navtext" className="navtext" href="#home">Trader Jocks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link id="navtext" className="navtext" href="#home">Home</Nav.Link>
        <NavDropdown className="navtext"title="League" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MLB</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">NBA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">NFL</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">NHL</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">WBA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">WNBA</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <NavDropdown className="navtext"title="Team" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown className="navtext"title="Item" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            <div className="col-md signupcontainer">
              <Button onClick={handleShow} id="signlogbtn">
                Sign up
              </Button>
              <Button onClick={handleShow2} id="signlogbtn">
                Login
              </Button>

 
  

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Create Your Jocks Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Login To Your Jocks Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Enter email associated with your Jocks Account
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



            </div>
            
          </div>
          

        </div>
        
        </>

    );
}


 


 

export default TraderNavbar;
