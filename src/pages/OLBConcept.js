import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import CaseStudy from '../components/CaseStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const OlbConcept = () => {
  return (
    <>
    <SecondaryNav />
    <CaseStudy
    headline = 'Online Banking Concept'
    lead = 'Layout concept for an updated Online Banking page for bbt.com'
    users = 'Current or prospective BBT customers who did not log in to the Online Banking portal through the homepage'
    role = "I was asked to design a new layout for Online Banking on bbt.com for testing purposes. I used bbt's then-current page hierarchy and identified which components could be added or modified to emphasize BBT's Online Banking features. I, then, created the visual assets to create a page that could be tested."
    process = "I started with by shortening the Hero image in order to move all other content higher up on the screen in order to incourage scrolling. I, then, imagined an entirely new component that could highlight BBT's technology and emphasizing the seamless transition from desktop portal to the mobile application. All content below the second full-width image were not changed and followed the standard page template."
    img = '/assets/images/design/olb-concept-full.jpg'
    alt = 'screenshot of concept layout for Online Banking page'
    />
    <ScrollTop />
    <Footer />
    </>
  )
}

export default OlbConcept;
