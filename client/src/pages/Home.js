import React, { useState } from 'react';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'
import ItemCarousel from '../components/ItemCarousel';

function Home() {
	const [searchCondition, setSearchCondition] = useState('');

	if (searchCondition) {
		return (
			<h2>Here</h2>
		);
	} else
		return (
			<ItemCarousel />
		);
}


export default Home;
