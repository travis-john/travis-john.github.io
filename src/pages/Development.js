import React from 'react';
import { Container, Row } from 'reactstrap';
import SecondaryNav from '../components/SecondaryNav';
import CategoryMasthead from '../components/CategoryMasthead';
import PortfolioItem from '../components/PortfolioItem';
import Footer from '../components/Footer';
import Github from '../svg/developer-activity.svg';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const Development = (props) => {

  return (
    <>
      <SecondaryNav />
      <CategoryMasthead
      headline='Development Projects'
      lead="I'm a Front-end Developer with 2 years experience with a major financial institution. Outside of work, I've been featured on Codepen's homepage 5 times and have created multiple working full-stack prototypes and CLI tools."
      svg={Github}
      />
      <div className='bg-showcase py-3'>
      <Container>
        <Row>
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/development/game-of-thrones-chart.png'
          alt='charting each Game of Thrones episode ratings over the course of eight seasons'
          title='Game of Thrones Chart'
          url='/development/game-of-thrones'
          />
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/development/falcon-toggle.png'
          alt='a toggle inspired by the jump to hyperspace'
          title='Falcon Toggle'
          url='/development/falcon-toggle'
          />
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/development/financial-dashboard.png'
          alt='fetching the latest cryptocurrency data using APis and rendering with javascript'
          title='Financial Dashboard'
          url='/development/crypto-dashboard'
          />
          <PortfolioItem
          md='12'
          sm='12'
          image='/assets/images/development/movieBrowser.png'
          alt='getting the latest movies and ratings and rendering with handlebars'
          title='movieBrowser'
          url='/development/movieBrowser'
           />
          <PortfolioItem
          md='6'
          sm='12'
          image='/assets/images/development/tabable-hover.png'
          alt='making hovers accessible'
          title='Tabable Hover'
          url='/development/tabable-hover'
          />
          <PortfolioItem
          md='6'
          sm='12'
          image='/assets/images/development/zdog-uswnt.png'
          alt='the USWNT crest rendered in JS'
          title='USWNT Crest'
          url='/development/zdog-uswnt'
          />
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  )

}

export default Development;
