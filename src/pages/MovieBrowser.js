import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class MovieBrowser extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">movieBrowser</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <img className='img-fluid' src='../../assets/images/development/movieBrowser.png' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://whispering-dawn-54949.herokuapp.com/" target="_blank">Prototype </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> Feb 2020
                      </strong>
                  </li>
                  <li class="list-inline-item">Library:&nbsp;
                      <strong>Handlebars, NodeJS, MYSQL<span class="sr-only">opens in new tab</span>
                      </strong>
                  </li>
                  <li class="list-inline-item">Github Repo:&nbsp;
                      <strong><Link class="work-link" to="https://github.com/travis-john/project2" target="_blank">movieBrowser <i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i></Link><span class="sr-only">opens in new tab</span>
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>My second project for the UNC Coding Bootcamp. Using MaterializeCSS for the styling, this project is built on NodeJS, using and express server and HandlebarsJS for dynamic rendering of components. On the back-end, it uses MySQL database to manage users and writing their chosen movies to a watchlist.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default MovieBrowser;
