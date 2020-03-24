import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Home from './pages/Home';
import DesignCategory from './pages/DesignCategory';
import DevelopmentCategory from './pages/DevelopmentCategory';
import Project from './pages/Project';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Main>
          <Route exact path="/" component={Home} />
          <Route exact path='design' component={DesignCategory} />
          <Route exact path='/development' component={DevelopmentCategory} />
          <Route path='/development/:id' component={Project} />
          <Route path='/design/:id' component={Project} />
        </Main>
        <ScrollTop />
        <Footer />
      </>
    </Router>
  );
}

export default App;
