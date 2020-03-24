import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Codepen from 'react-codepen-embed';
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class GOTChart extends Component {
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
                      <strong><Link class="work-link" to="https://codepen.io/travis_john/full/dERzbj" target="_blank">Codepen </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> May 2019
                      </strong>
                  </li>
                  <li class="list-inline-item">Library:&nbsp;
                      <strong><Link className='work-link' to='https://www.chartjs.org/' target='_blank'>ChartJS </Link> <span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>Using ChartJS to graph Game of Thrones episode ratings throughout the years. This pen was featured on Codepen's homepage on May 22, 2019.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default GOTChart;
