import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class MediaTruist extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Media.Truist.com</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <img className='img-fluid' src='../../assets/images/design/media-truist-card.png' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://www.sketch.com/" target="_blank">Sketch </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> Aug 2019
                      </strong>
                  </li>
                  <li class="list-inline-item">Full Design:&nbsp;
                      <strong><Link class="work-link" to="../assets/images/design/media-truist-full.png" target="_blank">Image </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Live Page:&nbsp;
                      <strong><Link class="work-link" to="https://media.truist.com/" target="_blank">media.truist.com </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>One of my final projects working for BB&amp;T before they merged with Suntrust to form Truist Financial Services. I designed the page layout and new components to be implemented upon site launch with the vision of a page that not only was welcoming, but served vital personal and legal information regarding the merger of the two companies. Page was updated in Feb 2020 to reflect new Truist branding but maintains my visioned layout</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default MediaTruist;
