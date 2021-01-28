import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { faDownload  }from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CaseStudy = (props) => {
  if(props.hasDownload){
  return (
    <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap pt-5' sm='12' md='4'>
        <h1>{props.headline}</h1>
        <p className='lead py-3 border-bottom'>{props.lead}</p>
        <h2>Users and Audience </h2>
        <p className='py-3 border-bottom'> {props.users} </p>
        <h2>Role</h2>
        <p className='py-3 border-bottom'>{props.role}</p>
        <h2>Process</h2>
        <p className='py-3'>{props.process}</p>
        <a className='btn btn-primary btn-lg text-white' href={props.link}><FontAwesomeIcon className='fa mr-2' icon={faDownload} />Download prototype</a>
      </Col>
      <Col className='pt-5' sm="1" md="8">
        <img className='img-fluid mb-3' src={props.img} alt={props.alt} />
      </Col>
    </Row>
  </Container>
  )
}
else if (props.hastwoImages) {
  return (
    <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap pt-5' sm='12' md='4'>
        <h1>{props.headline}</h1>
        <p className='lead py-3 border-bottom'>{props.lead}</p>
        <h2>Users and Audience </h2>
        <p className='py-3 border-bottom'> {props.users} </p>
        <h2>Role</h2>
        <p className='py-3 border-bottom'>{props.role}</p>
        <h2>Process</h2>
        <p className='py-3'>{props.process}</p>
      </Col>
      <Col className='pt-5' sm="1" md="4">
        <img className='img-fluid mb-3' src={props.img1} alt={props.alt1} />
      </Col>
      <Col className='pt-5' sm="1" md="4">
        <img className='img-fluid mb-3' src={props.img2} alt={props.alt2} />
      </Col>
    </Row>
  </Container>
  )
}
else {
  return (
    <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap pt-5' sm='12' md='4'>
        <h1>{props.headline}</h1>
        <p className='lead py-3 border-bottom'>{props.lead}</p>
        <h2>Users and Audience </h2>
        <p className='py-3 border-bottom'> {props.users} </p>
        <h2>Role</h2>
        <p className='py-3 border-bottom'>{props.role}</p>
        <h2>Process</h2>
        <p className='py-3'>{props.process}</p>
      </Col>
      <Col className='pt-5' sm="1" md="8">
        <img className='img-fluid mb-3' src={props.img} alt={props.alt} />
      </Col>
    </Row>
  </Container>
  )
 }
}

export default CaseStudy;
