import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';
import MainJS from '../components/MainJS';

class DesignCategory extends Component {
  render() {
  return(
    <>
    <header className="masthead bg-tertiary text-center">
      <Container>
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">UX Design</h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <Row>
        <Col size="sm-4">
          <div className="portfolio-item mx-auto">
            <div className='hover-effect' tabIndex='0'>
              <img className="img-fluid" src="assets/images/design/louvre-redesign.png" alt="image of the glass pyrmaid at the louvre" />
                <div className='overlay'>
                  <h2>Louvre User Flow</h2>
                  <Link className='info mbml-sm' to='/design/louvre-user-flow'>Learn More<span className='sr-only'>about the prototype</span></Link>
                </div>
              </div>
            </div>
          </Col>
          <Col size="sm-4">
            <div className="portfolio-item mx-auto">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="assets/images/design/media-truist-card" alt="screensot of media.truist.com mock that links to detail page" />
                  <div className='overlay'>
                    <h2>Media.Truist.com</h2>
                    <Link className='info mbml-sm' to='/design/media-truist'>Learn More<span className='sr-only'>about the prototype</span></Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col size="sm-4">
              <div className="portfolio-item mx-auto">
                <div className='hover-effect' tabIndex='0'>
                  <img className="img-fluid" src="assets/images/design/olb-concept-card.png" alt="screenshot of online banking concept that links to detail page" />
                    <div className='overlay'>
                      <h2>Online Banking Concept</h2>
                      <Link className='info mbml-sm' to='design/olb-concept'>Learn More<span className='sr-only'>about the prototype</span></Link>
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
        </Container>
        <Container>
        <Row>
          <Col size="sm-4">
            <div className="portfolio-item mx-auto">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="assets/images/design/frontier-landing-page-mock-card.png" alt="screenshot of landing page mock that links to dribble page" />
                  <div className='overlay'>
                    <h2>Landing Page Concept</h2>
                    <Link className='info mbml-sm' to='https://dribbble.com/shots/7072069-Landing-Page-UI'>Learn More <span className='sr-only'>about the design (opens in new tab)</span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
          </Col>
          <Col size="sm-4">
            <div className="portfolio-item mx-auto">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="assets/images/design/product_Card.png" alt="screenshot of product card that links to dribbble page" />
                  <div className='overlay'>
                    <h2>Product Card Design</h2>
                    <Link className='info mbml-sm' to='https://dribbble.com/shots/6475784-Product-Card-UI'>Learn More <span className='sr-only'>about the design (opens in new tab)</span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></Link>
                  </div>
                </div>
              </div>
          </Col>
          <Col size="sm-4">
            <div className="portfolio-item mx-auto">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="assets/images/design/profile-card-concept.png" alt="screenshot of profile card concept that links to dribbble page" />
                  <div className='overlay'>
                    <h2>Profile Card Concept</h2>
                    <Link className='info mbml-sm' to='https://dribbble.com/shots/5307179-Profile-Card-Concept'>Learn More <span className='sr-only'>about the design (opens in new tab)</span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></Link>
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

export default DesignCategory;
