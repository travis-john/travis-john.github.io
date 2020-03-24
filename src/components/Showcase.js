import React from 'react';
import { Link } from "react-router-dom";
import Container from './Container';
import Row from './Row';
import Col from './Col';

const Showcase = () => {
  return (
    <section className="page-section portfolio" id="portfolio">
      <Container>

        {/* Portfolio Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Work</h2>

        {/* Icon Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* Portfolio Grid Items */}
        <Row>

          {/* Portfolio Item 1 */}
          <Col size="sm-6">
            <div className="portfolio-item mx-auto ">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="../assets/images/development/financial-dashboard.png" alt="screenshot of financial dashboard showing cards for different cryptocurrencies" />
                  <div className='overlay'>
                    <h2>Finance Dashboard</h2>
                    <Link className='info mbml-half' to='/development/finance-dashboard'>Learn More <span className='sr-only'>about the prototype</span></Link>
                  </div>
                </div>
              </div>
            </Col>

          {/* Portfolio Item 2 */}
          <Col size="sm-6">
            <div className="portfolio-item mx-auto ">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="../assets/images/development/movieBrowser.png" alt="screenshot of movieBrowswer app with cards of movie posters" />
                  <div className='overlay'>
                    <h2>ZDog USWNT</h2>
                    <Link className='info mbml-half' to='/development/movieBrowser'>Learn More <span className='sr-only'>about the prototype</span></Link>
                  </div>
                </div>
              </div>
            </Col>

          {/* Portfolio Item 3 */}
          <Col size="sm-12">
            <div className="portfolio-item mx-auto">
              <div className="hover-effect" tabIndex="0">
                <img className="img-fluid" src="assets/images/design/louvre-redesign.png" alt="image of the glass pyrmaid at the louvre" />
                <div className="overlay">
                  <h2>Louvre User Flow</h2>
                  <Link className="info mbml-large" to="/design/louvre-user-flow">Learn More <span className='sr-only'>about the design</span></Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Portfolio Item 4 */}
          <Col size="sm-4">
            <div className="portfolio-item mx-auto">
              <div className="hover-effect" tabIndex="0">
                <img className="img-fluid" src="assets/images/design/product_card.png" alt="image of nike shoe with details to change color, size, and receive product information" />
                <div className="overlay">
                  <h2>Product Card Design</h2>
                  <Link className="info mbml-sm" to="https://dribbble.com/shots/6475784-Product-Card-UI" target="_blank">Learn More  <i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i><span className='sr-only'>opens in new tab</span></Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Portfolio Item 5 */}
          <Col size="sm-4">
            <div className="portfolio-item mx-auto ">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="../assets/images/development/tabable-hover.png" alt="screenshot of tabable hover prototype with link to detail page" />
                  <div className='overlay'>
                    <h2>Tabable Hover</h2>
                    <Link className='info mbml-sm' to='/development/tabable-hover'>Learn More<span className='sr-only'>about the prototype</span></Link>
                  </div>
                </div>
            </div>
          </Col>

          {/* Portfolio Item 6 */}
          <Col size="sm-4">
            <div className="portfolio-item mx-auto ">
              <div className='hover-effect' tabIndex='0'>
                <img className="img-fluid" src="../assets/images/development/zdog-uswnt.png" alt="image of UWWNT crest. a shield with USA spelled with four stars above" />
                  <div className='overlay'>
                    <h2>ZDog USWNT</h2>
                    <Link className='info mbml-sm' to='/development/zdog-uswnt'>Learn More<span className='sr-only'>about the prototype</span></Link>
                  </div>
                </div>
            </div>
          </Col>

        </Row>
        {/* /.row */}

      </Container>
    </section>
  )
}

export default Showcase;
