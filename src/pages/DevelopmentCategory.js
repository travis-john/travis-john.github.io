import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import MainJS from '../components/MainJS';

class DevelopmentCategory extends Component {
  render() {
    return (
      <>
        <header className="masthead bg-tertiary text-center">
          <Container>
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">UNC Coding Bootcamp Projects</h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size="sm-6">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/financial-dashboard.png" alt="screenshot of financial dashboard showing cards for different cryptocurrencies" />
                    <div className='overlay'>
                      <h2>Finance Dashboard</h2>
                      <a className='info mbml-half' to='/finance-dashboard' target="_blank">Learn More <span className='sr-only'>about the design (opens in new tab)</span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col size="sm-6">
                <div className="portfolio-item mx-auto ">
                  <div className='hover-effect' tabIndex='0'>
                    <img className="img-fluid" src="../assets/images/development/movieBrowser.png" alt="screenshot of movieBrowswer app with cards of movie posters" />
                      <div className='overlay'>
                        <h2>ZDog USWNT</h2>
                        <a className='info mbml-half' to='/movieBrowser' target="_blank">Learn More <span className='sr-only'>about the design (opens in new tab)</span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></a>
                      </div>
                    </div>
                  </div>
                </Col>
            </Row>
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">UI Design</h2>
            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            <Row>
            <Col size="sm-6">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/gooey-loaders.png" alt="screenshot of gooey loader component with link to detail page" />
                    <div className='overlay'>
                      <h2>Gooey Loaders</h2>
                      <a className='info mbml-half' to='/goeey-loader'>Learn More<span className='sr-only'>about the prototype</span></a>
                    </div>
                  </div>
              </div>
            </Col>
            <Col size="sm-6">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/falcon-toggle.png" alt="screenshot of toggle styled like the jump to hyperspace with link to detail page" />
                    <div className='overlay'>
                      <h2>Falcon Toggle</h2>
                      <a className='info mbml-half' to='/falcon-toggle'>Learn More<span className='sr-only'>about the prototype</span></a>
                    </div>
                  </div>
              </div>
            </Col>
            </Row>
            <Row>
            <Col size="sm-4">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/game-of-thrones-chart.png" alt="screenshot of a chart of game of thrones episode ratings with link to detail page" />
                    <div className='overlay'>
                      <h2>GoT Chart</h2>
                      <a className='info mbml-sm' to='/game-of-thrones-chart'>Learn More<span className='sr-only'>about the prototype</span></a>
                    </div>
                  </div>
              </div>
            </Col>
            <Col size="sm-4">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/tabable-hover.png" alt="screenshot of tabable hover prototype with link to detail page" />
                    <div className='overlay'>
                      <h2>Tabable Hover</h2>
                      <a className='info mbml-sm' to='/tabable-hover'>Learn More<span className='sr-only'>about the prototype</span></a>
                    </div>
                  </div>
              </div>
            </Col>
            <Col size="sm-4">
              <div className="portfolio-item mx-auto ">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="../assets/images/development/zdog-uswnt.png" alt="image of UWWNT crest. a shield with USA spelled with four stars above" />
                    <div className='overlay'>
                      <h2>ZDog USWNT</h2>
                      <a className='info mbml-sm' to='/zdog-uswnt'>Learn More<span className='sr-only'>about the prototype</span></a>
                    </div>
                  </div>
              </div>
            </Col>
            </Row>
          </Container>
        </header>
        <MainJS />
      </>
    )
  }
}

export default DevelopmentCategory;
