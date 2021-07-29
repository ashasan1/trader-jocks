import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';
import { Carousel, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import '../index.css'
import ItemCarousel from '../components/ItemCarousel';
import { GET_ITEMS } from '../utils/queries';

const SearchResults = (searchTerm) => {

return (
<h2>I'm HERE!! and the search criteria is ${searchTerm}</h2>
)
}

export default SearchResults