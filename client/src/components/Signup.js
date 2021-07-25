import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
	const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
	const [addUser, { error }] = useMutation(ADD_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	}

	const handleSignUp = async (event) => {
		event.preventDefault();
		if (Form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await addUser({ variables: { ...userFormData } });
			Auth.login(data.addUser.token);

		} catch (err) {
			console.log(err);
		}
	}
	return (
		<>
			<Form onSubmit={handleSignUp}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>User Name</Form.Label>
					<Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleInputChange} value={userFormData.username} required />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="text" name="email" placeholder="Enter email" onChange={handleInputChange} value={userFormData.email} required />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" name="password" placeholder="Password" onChange={handleInputChange} value={userFormData.password} required />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	)
}

export default Signup;