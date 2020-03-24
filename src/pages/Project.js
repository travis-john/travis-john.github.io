import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import MainJS from '../components/MainJS';
import FinanceDashboard from './FinanceDashboard';
import MovieBrowser from './MovieBrowser';
import GooeyLoader from './GooeyLoader';
import FalconToggle from './FalconToggle';
import GOTChart from './GOTChart';
import TabableHover from './TabableHover';
import ZdogUSWNT from './ZdogUSWNT';
import Louvre from './Louvre';
import MediaTruist from './MediaTruist';
import OLBConcept from './OLBConcept';


function Project() {
  return (
    <Router>
      <>
        <Navbar />
        <Main>
          <Route exact path="/development/finance-dashboard" component={FinanceDashboard} />
          <Route exact path='/development/movieBrowser' component={MovieBrowser} />
          <Route exact path='/development/gooey-loader' component={GooeyLoader} />
          <Route exact path='/development/falcon-toggle' component={FalconToggle} />
          <Route exact path='/development/game-of-thrones-chart' component={GOTChart} />
          <Route exact path='/development/tabable-hover' component={TabableHover} />
          <Route exact path='/development/zdog-uswnt' component={ZdogUSWNT} />
          <Route exact path='/design/louvre-user-flow' component={Louvre} />
          <Route exact path='/design/media-truist' component={MediaTruist} />
          <Route exact path='/design/olb-concept' component={OLBConcept} />
        </Main>
        <MainJS />
      </>
    </Router>
  )
}

export default Project;
