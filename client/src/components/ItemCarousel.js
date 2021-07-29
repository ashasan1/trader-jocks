import React from 'react';
import { useQuery } from '@apollo/client';
import { Carousel } from 'react-bootstrap';
import { CAROUSEL_ITEMS } from '../utils/queries';

const ItemCarousel = () => {
	const { loading, data } = useQuery(CAROUSEL_ITEMS);

	if (loading) {
		return <h2>LOADING...</h2>
	}

	return (
		<>
			<div className="container">
				<div className="row">
					<div>
						<div className="col-md carouseldiv">
							<Carousel>
								{data.getCarouselItems.map((carouselItem) => {
									return (
										<Carousel.Item key={carouselItem._id}>
											<img
												className="d-block w-100 caroimage"
												src={carouselItem.imageURL}
												alt="First slide"
											/>
										</Carousel.Item>
									);
								})}
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemCarousel;
