import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';
import { Container, Form, Button } from 'react-bootstrap';
import '../index.css'
import ItemCarousel from '../components/ItemCarousel';
import SearchResults from '../components/SearchResults';

function Home() {
	const [searchCriteria, setSearchCriteria] = useState('');

	const handleSearch = async (event) => {
		event.preventDefault();
		console.log(event.target.searchInput.value);
		setSearchCriteria(event.target.searchInput.value);
	}

	return (
		<>
			<Container>
				<Form onSubmit={handleSearch}>
					<Form.Row>
						<Form.Control
							name='searchInput'
							className="mr-2"
							type='text'
							placeholder='Enter Player Name to Search'
						/>
						<Button type='submit'>Search</Button>
					</Form.Row>
				</Form>
			</Container>
			{ (searchCriteria) ? <SearchResults searchTerm="{searchCriteria}" /> : <ItemCarousel /> }
		</>
	);
}


export default Home;
