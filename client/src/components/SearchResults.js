import React from 'react';
import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'
import { SEARCH_ITEMS } from '../utils/queries';

const SearchResults = (searchTerm) => {
	const { loading, data } = useQuery(SEARCH_ITEMS);

	if (loading) {
		return <h2>LOADING...</h2>
	}

	return (
		<>
			<div className="container">
				<div className="row">

					<div>
						<h3 className="searchheader">MLB Items</h3>
					</div>

					{data.getSearchItems.map((searchItem) => {
						return (
							<div id="searchitem">
								<img id="searchitemimage" src="https://image.shutterstock.com/image-photo/soccer-ball-isolated-on-white-260nw-129557066.jpg"></img>
								<p id="searchitemdescription"> Micheal Jordan Basketball signed in 2006</p>
							</div>
							)
						}
					)}
				</div>
			</div>
		</>
	);
};

export default SearchResults;