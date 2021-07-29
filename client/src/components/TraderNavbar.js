import React from 'react';
import { useState } from 'react';
import { Carousel, Container, Col, Form, FormControl, Button, Card, CardColumns, Navbar, NavDropdown, Nav, Modal, Tab } from 'react-bootstrap';
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
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="me-auto">
									<Nav.Link id="navtext" href="/">Home</Nav.Link>
									
										
										{Auth.loggedIn() ? (
											<>
												
												<Nav.Link id="navtext" href="/profile">Profile</Nav.Link>
												<Nav.Link onClick={Auth.logout} id="navtext">Logout</Nav.Link>
											</>
										) : (
											<>
												<Nav.Link onClick={() => setShowModal(true)} id="navtext">Login/Sign Up</Nav.Link>
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
											<Nav.Link id="modaltext" eventKey="login">Login</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link id="modaltext" eventKey="signup">Sign Up</Nav.Link>
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
