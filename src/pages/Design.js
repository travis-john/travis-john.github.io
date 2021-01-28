import React from 'react';
import { Container, Row } from 'reactstrap';
import SecondaryNav from '../components/SecondaryNav';
import CategoryMasthead from '../components/CategoryMasthead';
import PortfolioItem from '../components/PortfolioItem';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import Heatmap from '../svg/heatmap.svg';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const Design = (props) => {

  return (
    <>
      <SecondaryNav />
      <CategoryMasthead
      headline='Design Projects'
      lead='I have 3+ years as a professional UX/UI designer. I believe in simple, intuitive interfaces combined with minimalistic designs. Here are some of my projects.'
      svg={Heatmap}
      />
      <div className='bg-showcase py-3'>
      <Container>
        <Row>
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/design/frontier-landing-page-mock-card.png'
          alt='cropped screenshot of Frontier landing page mock'
          title='Landing Page Mock'
          url='https://dribbble.com/shots/7072069-Landing-Page-UI'
          target='_blank'
          icon={faExternalLinkAlt}
          sr='opens in new tab' />
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/design/compass-app.png'
          alt='cropped screenshot of compass app skin'
          title='Compass App Skin'
          url='https://dribbble.com/shots/6120425-Compass-App-Skin'
          target='_blank'
          icon={faExternalLinkAlt}
          sr='opens in new tab' />
          <PortfolioItem
          md='4'
          sm='12'
          image='/assets/images/design/product_card.png'
          alt='cropped screenshot of product card concept'
          title='Product Card'
          url='https://dribbble.com/shots/6475784-Product-Card-UI'
          target='_blank'
          icon={faExternalLinkAlt}
          sr='opens in new tab' />
          <PortfolioItem
          md='12'
          sm='12'
          image='/assets/images/design/media-truist-card.png'
          alt='cropped screenshot of media.truist.com'
          title='media.truist.com'
          url='/design/media-truist'
          />
          <PortfolioItem
          md='6'
          sm='12'
          image='/assets/images/design/olb-concept-card.png'
          alt='cropped screenshot of online banking concept'
          title='Online banking concept'
          url='/design/olb-concept'
          />
          <PortfolioItem
          md='6'
          sm='12'
          image='/assets/images/design/louvre-redesign.png'
          alt='cropped screenshot of louvre redesign'
          title='Louvre Redesign'
          url='/design/louvre-redesign'
          />
        </Row>
      </Container>
      </div>
      <Footer />
    </>
  )

}

export default Design;
