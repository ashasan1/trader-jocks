import React from 'react';
import { useQuery } from '@apollo/client';
import '../index.css'
import { SEARCH_ITEMS } from '../utils/queries';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SearchResults = (searchTerm) => {
	console.log("searchTerm.searchTerm=", searchTerm.searchTerm);
	const { loading, data } = useQuery(SEARCH_ITEMS, { variables: { searchCriteria: searchTerm.searchTerm }});

	const searchData = data?.getSearchItems || "";

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

					{data.getSearchItems.map((searchItem) => {
						return (
							<div id="searchitem" key={searchItem._id}>
								<img style={{ width: "200px" }} src={searchItem.imageURL} />
								<p id="searchitemdescription">{searchItem.playerName}</p>
								<p id="searchitemdescription">{searchItem.description}</p>
								<p id="searchitemdescription">Price: {searchItem.price}</p>
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