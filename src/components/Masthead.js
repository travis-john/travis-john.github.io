import React from 'react';
import {Container, Row, Col, Button, Card, CardTitle, CardBody, CardText} from 'reactstrap';
import {ReactSVG} from 'react-svg';
import SVG from '../svg/feeling-proud.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faDribbble, faGithub, faLinkedin, }from '@fortawesome/free-brands-svg-icons'
import { faDownload  } from '@fortawesome/free-solid-svg-icons';

const Masthead = (props) => {
    return (
      <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap justify-content-center' xs={{order: 2}} sm={{size: 12, order: 2}} md={{size: 4, order: 1}}>
        <h1>Hello!</h1>
        <p className='lead'>I'm Travis - a Front-end Developer & UX/UI Designer</p>
        <ul className='list-inline mb-0'>
          <li className='list-inline-item mb-2'>
            <a className='btn btn-outline-primary text-center rounded-circle' href='https://codepen.io/travis_john'>
              <FontAwesomeIcon className='fab' icon={faCodepen} />
            </a>
          </li>
          <li className='list-inline-item mb-2'>
            <a className='btn btn-outline-primary text-center rounded-circle' href='https://dribbble.com/travis_john'>
              <FontAwesomeIcon className='fab' icon={faDribbble} />
            </a>
          </li>
          <li className='list-inline-item mb-2'>
            <a className='btn btn-outline-primary text-center rounded-circle' href='https://github.com/travis-john'>
              <FontAwesomeIcon className='fab' icon={faGithub} />
            </a>
          </li>
          <li className='list-inline-item mb-2'>
            <a className='btn btn-outline-primary text-center rounded-circle' href='https://www.linkedin.com/in/travis-john-2377962a/'>
              <FontAwesomeIcon className='fab' icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <a className='btn btn-primary btn-lg text-white' href='/assets/resume/travis-john-resume-2021-web.pdf' target='_blank'><FontAwesomeIcon className='fa mr-2' icon={faDownload} />Download résumé</a>
      </Col>
      <Col xs={{order: 1}} sm={{size: 12, order: 1 }} md={{size: 8, order: 2}}>
        <ReactSVG src={SVG}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
      </Col>
      </Row>
      <Row className='mt-sm-5 mt-md-n5'>
          <Col sm={{ size: 12, offset: 0 }} md={{ size: 4, offset: 2 }}>
            <Card inverse color="primary" className='mb-3 rounded-2'>
              <CardBody>
                <CardTitle>Design Projects</CardTitle>
                <CardText>I have 3+ years as a professional UX/UI Designer. Click the link below to view design projects</CardText>
                <Button outline color='white' block href='/design'>View design projects</Button>
              </CardBody>
            </Card>
          </Col>
          <Col  sm={{ size: 12, offset: 0 }} md={{ size: 4}}>
            <Card inverse color="primary" className='mb-3 rounded-2'>
              <CardBody>
                <CardTitle>Development Projects</CardTitle>
                <CardText>I am a recent graduate of the UNC Coding Bootcamp. Click the link below to view development projects</CardText>
                <Button outline color='white' block href='/development'>View development projects</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Masthead;
