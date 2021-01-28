import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const MovieBrowser = () => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    headline = 'Accessible Hover prototype'
    lead = 'Making interactivity accessible'
    description = 'An initial attempt at making hover effects accessible. On mobile devices, the hover effects are intentionally disabled.'
    listItem1 = 'Javascript'
    listItem2 = 'HTML'
    listItem3 = 'A11Y'
    process = 'An idea I had and decided to make a reality. Hover effects are not generally considered accessible'
    hash='GbWNma'
    />
    <Footer />
    </>
  )
}

export default MovieBrowser;
