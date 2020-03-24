import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container';
import Col from '../components/Col';
import Row from '../components/Row';

class FinanceDashboard extends Component {
  render(){
    return (
      <header className="masthead bg-tertiary text-center">
        <Container>
          <h1 className="page-section-heading text-center text-uppercase text-secondary mb-0">Finance Dashboard</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <Row>
            <Col size='sm-12'>
              <img className='img-fluid' src='../../assets/images/development/financial-dashboard.png' />
            </Col>
            <Col size='sm-12'>
              <div className='work-details'>
              <ul class="list-inline item-details">
                  <li class="list-inline-item">Platform:&nbsp;
                      <strong><Link class="work-link" to="https://travis-john.github.io/dolla-dolla-bills/" target="_blank">Prototype </Link><span class="sr-only">opens in new tab </span><i className=" icon-small fas fa-external-link-alt" aria-hidden="true"></i>
                      </strong>
                  </li>
                  <li class="list-inline-item">Date:
                      <strong> Dec 2019
                      </strong>
                  </li>
                  <li class="list-inline-item">Library:&nbsp;
                      <strong>HTML, CSS, JQuery, AJAX, Firebase<span class="sr-only">opens in new tab</span>
                      </strong>
                  </li>
                  <li class="list-inline-item">Github Repo:&nbsp;
                      <strong><Link class="work-link" to="https://github.com/travis-john/dolla-dolla-bills" target="_blank">Dolla Dolla Bills</Link><span class="sr-only">opens in new tab</span>
                      </strong>
                  </li>
              </ul>
              </div>
            </Col>
            <Col size='sm-12'>
              <p>My first project for the UNC Coding Bootcamp. Built using the MaterializeCSS library and uses JQery to make Ajax calls to three APIs that generate financial news information. cryptocurrency information, and stock information. It uses Firebase as a database where the user can log in to save favorites.</p>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}

export default FinanceDashboard;
