import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class OLBConcept extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Online Banking Concept</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <img className='img-fluid' src='../../assets/images/design/olb-concept-card.png' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://www.sketch.com/" target="_blank">Sketch </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> Jul 2019
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>A redesigned Online Banking page concept for bbt.com. The Online Banking page was responsible for a large portion of traffic to the site, so it was decided that this page would have a unique page layout outside of our hierarchical standards. I used and redesigned existing components as well a new showcase component for this page. Due to the merger between BB&amp;T and Suntrust, this project never went beyond the design phase.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default OLBConcept;
