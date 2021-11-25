import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Database from './pages/About/About';
import About from './pages/Database/Database';
//import SignUp from './pages/SignUp/SignUp';
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
        <Route path='/Database' component={Database} />
        <Route path='/About' component={About} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;