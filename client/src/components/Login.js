import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import {useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../index.css'

const Login = () => {
	const [userFormData, setUserFormData] = useState({ username: '', password: ''});
	const [login, { error }] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value});
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await login({ variables: { ...userFormData }});
			if (!data) throw new Error('something went wrong');
			Auth.login(data.loginUser.token);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<>
			<Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="modaltext">User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" name="username" onChange={handleInputChange} />
           </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label id="modaltext">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
		</>
	)
}

export default Login;