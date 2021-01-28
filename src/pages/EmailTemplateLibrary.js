import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import CaseStudy from '../components/CaseStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const EmailTemplateLibrary = () => {

  return (
    <>
    <SecondaryNav />
    <CaseStudy
    hasDownload = 'true'
    link = '/assets/images/design/card-component.sketch'
    headline = 'Card Component'
    lead = 'Component design exercise'
    users = 'Any user searching for information on Cisco.com'
    role = 'Designer'
    process = "Cisco.com had no information-based card component in its component library. As an exercise in component design, I set about designing a card component that could, if implemented, replace their existing one. I took the general concept and applied it across a number of scenarios, including: different widths, backgrounds, and information combinations. The Sketch prototype was submitted to the PubHub team for addition to the component library, but not implemented as of January 2021."
    img = '/assets/images/design/card-component.jpg'
    alt = 'screenshot of louvre redesign homepage'
    />
    <ScrollTop />
    <Footer />
    </>
  )

}

export default EmailTemplateLibrary;
