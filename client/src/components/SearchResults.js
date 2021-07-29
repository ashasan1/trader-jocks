import React from 'react';
import { useQuery } from '@apollo/client';
import '../index.css'
import { SEARCH_ITEMS } from '../utils/queries';

const SearchResults = (searchTerm) => {
	console.log("searchTerm.searchTerm=", searchTerm.searchTerm);
	const { loading, data } = useQuery(SEARCH_ITEMS, { variables: { searchCriteria: searchTerm.searchTerm }});

	if (loading) {
		return <h2>LOADING...</h2>
	}

	return (
		<>
			<div className="container">
				<div className="row">

					<div>
						<h3 className="searchheader">Search Results</h3>
					</div>

					{data}
				</div>
			</div>
		</>
	);
};

export default SearchResults;