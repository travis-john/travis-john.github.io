import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import Footer from '../components/Footer';

const USWNT = () => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    headline = 'USWNT Crest'
    lead = "Featured on Codepen's homepage on June 17th, 2019"
    description = "A pseudo-3D rendering of the USWNT crest made during the FIFA Women's World Cup 2019"
    listItem1 = 'Javascript'
    listItem2 = 'zDog'
    listItem3 = '3D Design'
    process = "Zdog is a new Javascript library that renders pseudo-3D elements onto a canvas. I experimented with it's semantic class structure to combine shapes and paths to recreate a 3D rendering of the United States Women's National Football Team"
    hash='agbMNx'
    />
    <Footer />
    </>
  )
}

export default USWNT;
