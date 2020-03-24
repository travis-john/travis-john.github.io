import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class Louvre extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Redesigned Louvre Search Flow</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <img className='img-fluid' src='../../assets/images/design/louvre-redesign.png' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://www.sketch.com/" target="_blank">Sketch </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:&nbsp;
                      <strong>Dec 2018
                      </strong>
                  </li>
                  <li class="list-inline-item">Goal:&nbsp;
                      <strong>User Flow Design and Prototyping
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>I redesigned <Link className='work-link' to='https://www.louvre.fr/en'>The Louvre's <span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></Link> website after I saw its muddled and complicated functionality while researching locations to go on vacation. This prototye was designed with the search functionality in mind. To access the prototype, download the prototype and press command + p</p>
              <div className="text-center mt-4">
                <a className="btn btn-xl btn-outline-dark" href="../../assets/images/design/louvre-redesign.sketch">
                  <i className="fas fa-download mr-2"></i>
                  Download Prototype
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default Louvre;
