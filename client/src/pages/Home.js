import React, { useState } from 'react';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'
import { ItemCarousel } from '../components/ItemCarousel';

// let searchCondition = {
//   didSearch: false

// };

const [searchCondition, setSearchCondition] = useState('');


function Home() {
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
