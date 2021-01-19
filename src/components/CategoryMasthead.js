import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {ReactSVG} from 'react-svg';

const CategoryMasthead = (props) => {
  return(
    <Container className='p-3'>
    <Row className='mb-3 mb-xs-2'>
    <Col className='d-flex flex-column flex-wrap justify-content-center' xs={{order: 2}} sm={{size: 12, order: 2}} md={{size: 4, order: 1}}>
      <h1>{props.headline}</h1>
      <p className='lead'>{props.lead}</p>
    </Col>
    <Col xs={{order: 1}} sm={{size: 12, order: 1 }} md={{size: 8, order: 2}}>
      <ReactSVG src={props.svg}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
    </Col>
    </Row>
    </Container>
  )
}

export default CategoryMasthead;
