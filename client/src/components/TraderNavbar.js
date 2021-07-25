import React from 'react';
import { useState } from 'react';
import { Carousel, Container, Col, Form, Button, Card, CardColumns, Navbar, NavDropdown, Nav, Modal, Tab } from 'react-bootstrap';
import '../index.css'
import { useHistory } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Auth from '../utils/auth';

function TraderNavbar() {
	const [showModal, setShowModal] = useState(false);

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
										<NavDropdown className="navtext" title="League" id="basic-nav-dropdown">
											<NavDropdown.Item href="#action/3.1">MLB</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">NBA</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.4">NFL</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.5">NHL</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.6">WBA</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.7">WNBA</NavDropdown.Item>
											<NavDropdown.Divider />
										</NavDropdown>
										<NavDropdown className="navtext" title="Team" id="basic-nav-dropdown">
											<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
											<NavDropdown.Divider />
											<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
										</NavDropdown>
										<NavDropdown className="navtext" title="Item" id="basic-nav-dropdown">
											<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
											<NavDropdown.Divider />
											<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
										</NavDropdown>
										{Auth.loggedIn() ? (
											<>
												<Nav.Link onClick={Auth.logout} className="navtext">Logout</Nav.Link>
											</>
										) : (
											<>
												<Nav.Link onClick={() => setShowModal(true)} className="navtext">Login/Sign Up</Nav.Link>
											</>
										)}
									</Nav>
								</Navbar.Collapse>
							</Container>
						</Navbar>
					</div>
					<Modal
						show={showModal}
						onHide={() => setShowModal(false)}
						backdrop="static"
						keyboard={false}
					>
						<Tab.Container defaultActiveKey="login">
							<Modal.Header closeButton>
								<Modal.Title id="signup-modal">
									<Nav variant="pills">
										<Nav.Item>
											<Nav.Link eventKey="login">Login</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey="signup">Sign Up</Nav.Link>
										</Nav.Item>
									</Nav>
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Tab.Content>
									<Tab.Pane eventKey="login">
										<Login handleModalClose={() => setShowModal(false)} />
									</Tab.Pane>
									<Tab.Pane eventKey="signup">
										<Signup handleModalClose={() => setShowModal(false)} />
									</Tab.Pane>
								</Tab.Content>
							</Modal.Body>
						</Tab.Container>
					</Modal>
				</div>
			</div>
		</>
	);
}

export default TraderNavbar;
