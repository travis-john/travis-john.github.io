import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';
import MediaTruist from './pages/MediaTruist';
import OlbConcept from './pages/OLBConcept';
import DLJSection from './pages/DLJSection';
import CardComponent from './pages/CardComponent';
import EmailTemplateLibrary from './pages/EmailTemplateLibrary';
import LouvreRedesign from './pages/LouvreRedesign';
import GotChart from './pages/GOTChart';
import FalconToggle from './pages/FalconToggle';
import CryptoDashboard from './pages/CryptoDashboard';
import MovieBrowser from './pages/MovieBrowser';
import TabableHover from './pages/TabableHover';
import USWNT from './pages/ZdogUSWNT';

const App = (props) => {

  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/design'>
            <Design />
          </Route>
          <Route exact path='/development'>
            <Development />
          </Route>
          <Route exact path='/design/media-truist'>
            <MediaTruist />
          </Route>
          <Route exact path='/design/olb-concept'>
            <OlbConcept />
          </Route>
          <Route exact path='/design/dlj-section'>
            <DLJSection />
          </Route>
          <Route exact path='/design/card-component'>
            <CardComponent />
          </Route>
          <Route exact path='/design/email-template-library'>
            <EmailTemplateLibrary />
          </Route>
          <Route exact path='/design/louvre-redesign'>
            <LouvreRedesign />
          </Route>
          <Route exact path='/development/game-of-thrones'>
            <GotChart />
          </Route>
          <Route exact path='/development/falcon-toggle'>
            <FalconToggle />
          </Route>
          <Route exact path='/development/crypto-dashboard'>
            <CryptoDashboard />
          </Route>
          <Route exact path='/development/movieBrowser'>
            <MovieBrowser />
          </Route>
          <Route exact path='/development/tabable-hover'>
            <TabableHover />
          </Route>
          <Route exact path='/development/zdog-uswnt'>
            <USWNT />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
