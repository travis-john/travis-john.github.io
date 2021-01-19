import React, {Component} from 'react';
import {Container, Row, CardDeck, Card, CardTitle, CardSubtitle, CardBody, CardLink, CardFooter, CardText} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faCodepen} from '@fortawesome/free-brands-svg-icons';

class Showcase extends Component {

  constructor (props){
    super(props);
    this.state= {
      results: {}
    };
  };

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users/travis-john/repos');
    this.setState({results: res.data});
  }



  render() {
    return (
      <div className='bg-showcase p-5' id='showcase'>
      <Container>
        <h2 className='text-center'>Noteable Projects</h2>
        <Row className='p-2'>
          <CardDeck>
            <Card className='mb-3 rounded-2 border-left-primary'>
              <CardBody>
              <CardTitle><h3>movieBrowser</h3></CardTitle>
              <CardSubtitle>Feb 2020</CardSubtitle>
              <CardText>A movie browsing application build using MaterializeCSS and HandlebarsJS on the front end, MYSQL database, and Express</CardText>
              <CardLink href='https://whispering-dawn-54949.herokuapp.com/' target='_blank'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
              <CardLink href='/development/movieBrowser'>More details</CardLink>
              </CardBody>
              <CardFooter>
                <CardLink className='card-footer-link' href='https://github.com/apereira91/project2'> <FontAwesomeIcon className='ml-auto' icon={faGithub} /><span className='sr-only'>opens in new tab></span> </CardLink>
              </CardFooter>
            </Card>
          <Card className='mb-3 rounded-2 border-left-primary'>
            <CardBody>
            <CardTitle><h3>Crypto Dashboard</h3></CardTitle>
            <CardSubtitle>Dec 2019</CardSubtitle>
            <CardText>Protoype of a finance dashboard that acts as an information aggregate for all things finance and cryptocurrency related.</CardText>
            <CardLink href='https://travis-john.github.io/dolla-dolla-bills' target='_blank'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
            <CardLink href='/development/crypto-dashboard'>More details</CardLink>
            </CardBody>
            <CardFooter>
              <CardLink className='card-footer-link' href='https://github.com/travis-john/dolla-dolla-bills'><FontAwesomeIcon className='ml-auto' icon={faGithub} /> <span className='sr-only'>opens in new tab></span> </CardLink>
            </CardFooter>
          </Card>
          <Card className='mb-3 rounded-2 border-left-primary'>
            <CardBody>
            <CardTitle><h3>Star Wars Crawls</h3></CardTitle>
            <CardSubtitle>Feb 2020</CardSubtitle>
            <CardText>Using JQery AJAX calls, CSS Animations, and the free SWAPI to animate the opening crawls from all Star Wars movies</CardText>
            <CardLink href='https://travis-john.github.io/swapi-movie-crawl-animation' target='_blank'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
            </CardBody>
            <CardFooter>
              <CardLink className='card-footer-link' href='https://github.com/travis-john/dolla-dolla-bills'><FontAwesomeIcon className='ml-auto' icon={faGithub} /> <span className='sr-only'>opens in new tab></span> </CardLink>
            </CardFooter>
          </Card>
          </CardDeck>
          <CardDeck>
          <Card className='mb-3 rounded-2 border-left-primary'>
            <CardBody>
            <CardTitle><h3>USWNT ZDOG</h3></CardTitle>
            <CardSubtitle>Jun 2019</CardSubtitle>
            <CardText>Zdog is a new Javascript library that renders pseudo-3D elements onto a canvas. I experimented with it's semantic class structure to combine shapes and paths to recreate a 3D rendering of the United States Women's National Football Team</CardText>
            <CardLink href='https://codepen.io/travis_john/full/agbMNx' target='_blank'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
            <CardLink href='/development/zdog-uswnt'>More details</CardLink>
            </CardBody>
            <CardFooter>
              <CardLink className='card-footer-link' href='https://codepen.io/travis_john/pen/agbMNx'><FontAwesomeIcon className='ml-auto' icon={faCodepen} /> <span className='sr-only'>opens in new tab></span> </CardLink>
            </CardFooter>
          </Card>
          <Card className='mb-3 rounded-2 border-left-primary'>
            <CardBody>
            <CardTitle><h3>Gooey Loaders</h3></CardTitle>
            <CardSubtitle>May 2019</CardSubtitle>
            <CardText>Prototype of a loader component that uses SVG animations and filters to create a gooey effect</CardText>
            <CardLink href='https://codepen.io/travis_john/pen/xMNLam' target='_blank'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
            </CardBody>
            <CardFooter>
              <CardLink className='card-footer-link' href='https://codepen.io/travis_john/full/xMNLam'><FontAwesomeIcon className='ml-auto' icon={faCodepen} /> <span className='sr-only'>opens in new tab></span> </CardLink>
            </CardFooter>
          </Card>
          <Card className='mb-3 rounded-2 border-left-primary'>
            <CardBody>
            <CardTitle><h3>Falcon Toggle</h3></CardTitle>
            <CardSubtitle>May 2019</CardSubtitle>
            <CardText>A toggle component styled after the jump to hyperspace</CardText>
            <CardLink href='https://codepen.io/travis_john/pen/dEqqzq'>View application<FontAwesomeIcon className='ml-2' icon={faExternalLinkAlt} /><span className='sr-only'>opens in new tab</span></CardLink>
            <CardLink href='/development/falcon-toggle'>More details</CardLink>
            </CardBody>
            <CardFooter>
              <CardLink className='card-footer-link' href='https://codepen.io/travis_john/full/dEqqzq'><FontAwesomeIcon className='ml-auto' icon={faGithub} /> <span className='sr-only'>opens in new tab></span> </CardLink>
            </CardFooter>
          </Card>
          </CardDeck>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Showcase;
