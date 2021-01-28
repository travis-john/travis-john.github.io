import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import CaseStudy from '../components/CaseStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const DLJSection = () => {
  return (
    <>
    <SecondaryNav />
    <CaseStudy
    hastwoImages = 'true'
    headline = 'Digital Lifecycle Journey Section'
    lead = 'Two page templates created for multiple Cisco architectures to deliver information on their product use case and lifecycle phase'
    users = 'Subscribers of Cisco DNA, ISE, or ACI'
    role = 'I was tasked with designing page two page layouts using existing Cisco components that guided customers through each of the 6 lifecyle phases for their Cisco solution.'
    process = 'Upon being hired, I became familiar with Cisco components and began the process of identifying those that would best suit the purpose of allowing the user to easily navigate to their desired use case to learn how to go through each lifecycle phase. Because Cisco requires brand approval of all use of photography and in order to accelerate page deployment, a full-width, icon-based approach was chosen over using a card-based experience. Once people navigate to their use case, essential information regarding each lifecyle phase is presented in drawers in order to present a massive amount of information in a shorter vertical space. The final blades of the page were designed to get the user to engage in the Cisco Community and register for Ask the Experts sessions, both of which were requirements of stakesholders.'
    img1 = '/assets/images/design/parent-page.png'
    img2 = '/assets/images/design/use-case-page.png'
    alt1 = 'screenshot of Cisco DLJ parent page'
    alt2 = 'screenshot of Cisco DLJ use case page'
    />
    <ScrollTop />
    <Footer />
    </>
  )
}

export default DLJSection;
