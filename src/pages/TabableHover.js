import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Codepen from 'react-codepen-embed';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class FalconToggle extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Tabable Hover Effect</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <Codepen hash='GbWNma' user='travis_john' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://codepen.io/travis_john/full/GbWNma" target="_blank">Codepen </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> June 2019
                      </strong>
                  </li>
                  <li class="list-inline-item">Goal:&nbsp;
                      <strong>Accessibility
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>I created this prototype with accessibility in mind. Hover effects are not typically accessibile to users with disabilities, so I wrote a function to make the effect accessibile on hover and on focus. In addition I wrote a polyfill so that the hover effect is disabled on mobile devices so that disabled users can still access the content on their phones.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default FalconToggle;
