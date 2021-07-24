import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar.js';
import TraderJocksLogo from './components/TraderJocksLogo';
import Header from './components/Header';
import  Carousel from './components/Carousel';

const client = new ApolloClient({
  cache:new InMemoryCache(),
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});


function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
          <Header />
          <Navbar /> 
           <Carousel /> 
           <TraderJocksLogo /> 
          <Switch>
             <Route exact path='/' component={Home} /> 
             <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> 
          </Switch>
          </>
          </Router> 
     </ApolloProvider>
  );
}

export default App;
