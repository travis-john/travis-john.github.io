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
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Game of Thrones Ratings Chart</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <Codepen hash='dERzbj' user='travis_john' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://codepen.io/travis_john/full/agbMNx" target="_blank">Codepen </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:&nbsp;
                      <strong>June 2019
                      </strong>
                  </li>
                  <li class="list-inline-item">Library:&nbsp;
                      <strong><Link className='work-link' to='https://zzz.dog/' target='_blank'>zdog </Link> <span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>Zdog is a new Javascript library that renders pseudo-3D elements onto a canvas. I experimented with it's semantic class structure to combine shapes and paths to recreate a 3D rendering of the United States Women's National Football Team crest to honor them as they compete in the 2019 FIFA World Cup. This pen was featured on Codepen's homepage on June 17, 2019.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default FalconToggle;
