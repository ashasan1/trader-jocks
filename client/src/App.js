import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Home from './pages/Home';
import Navbar from './components/Navbar.js';
import TraderJocksLogo from './components/TraderJocksLogo';

function App() {
  return (
    // <ApolloProvider client={client}>
        // <Router>
          <>
           
          
          <Navbar />
          <TraderJocksLogo />
         
          {/* <Switch> */}
            {/* <Route exact path='/' component={Home} /> */}
            {/* <Route exact path='/saved' component={SavedBooks} /> */}
            {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
          {/* </Switch> */}
          </>
          // {/* </Router>  */}
    // {/* // </ApolloProvider> */}
  );
}

export default App;
