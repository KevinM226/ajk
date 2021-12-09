import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Database from './pages/About/About';
import About from './pages/Database/Database';
import Stats from './pages/Stats/Stats';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={Database} />
        <Route path='/Database' component={About} />
        <Route path='/Stats' component={Stats} />
      </Switch>
     <Footer /> 
    </Router>
  );
}

export default App;
