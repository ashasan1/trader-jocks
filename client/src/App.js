import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Item from './pages/Item'
import Search from './pages/Search';
import TraderNavbar from './components/TraderNavbar.js';
import TraderJocksLogo from './components/TraderJocksLogo';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';

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
              <TraderNavbar />
          {/* <TraderJocksLogo /> */}   
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/item' component={Item} />
            <Route exact path='/Signup' component={Signup} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          </>
          <Footer />
          </Router> 
     </ApolloProvider>
  );
}

export default App;
