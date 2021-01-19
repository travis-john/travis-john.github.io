import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import Codepen from 'react-codepen-embed';

const DevStudy = (props) => {
  if (props.hasImage) {
  return (
    <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap align-items-start pt-5' sm='12' md='4'>
        <h1>{props.headline}</h1>
        <p className='lead py-3 border-bottom'>{props.lead}</p>
        <h2>Description </h2>
        <p className='py-3 border-bottom'> {props.description} <a className='btn btn-link p-0' href={props.repo} target='_blank'>View repo <FontAwesomeIcon className='fa ml-2' icon={faExternalLinkAlt} /></a></p>
        <h2 className='pt-3'>Skills</h2>
        <ListGroup className='py-3' flush>
          <ListGroupItem>{props.listItem1}</ListGroupItem>
          <ListGroupItem>{props.listItem2}</ListGroupItem>
          <ListGroupItem>{props.listItem3}</ListGroupItem>
        </ListGroup>
        <h2>Process</h2>
        <p className='py-3'>{props.process}</p>
      </Col>
      <Col className='pt-5' sm="1" md="8">
      <img className='img-fluid mb-3' src={props.img} alt={props.alt} />
      <a className='btn btn-primary btn-lg' href={props.link} target='_blank'>View prototype <FontAwesomeIcon className='fa ml-2' icon={faExternalLinkAlt} /></a>
      </Col>
    </Row>
  </Container>
  )
} else {
  return(
    <Container className='p-3'>
      <Row className='mb-3 mb-xs-2'>
      <Col className='d-flex flex-column flex-wrap pt-5' sm='12' md='4'>
        <h1>{props.headline}</h1>
        <p className='lead py-3 border-bottom'>{props.lead}</p>
        <h2>Description </h2>
        <p className='py-3 border-bottom'> {props.description} </p>
        <h2>Skills</h2>
        <ListGroup className='py-3' flush>
          <ListGroupItem>{props.listItem1}</ListGroupItem>
          <ListGroupItem>{props.listItem2}</ListGroupItem>
          <ListGroupItem>{props.listItem3}</ListGroupItem>
        </ListGroup>
        <h2>Process</h2>
        <p className='py-3'>{props.process}</p>
      </Col>
      <Col className='pt-5' sm="1" md="8">
        <Codepen hash={props.hash} user='travis_john' height='600' defaultTab='result'/>
      </Col>
    </Row>
  </Container>
  )
}
}

export default DevStudy;
