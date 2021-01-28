import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import CaseStudy from '../components/CaseStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const LouvreRedesign = () => {

  return (
    <>
    <SecondaryNav />
    <CaseStudy
    hasDownload = 'true'
    link = '/assets/images/design/louvre-redesign.sketch'
    headline = 'Louvre Redesign'
    lead = 'Wireframing and flow exercise'
    users = 'All users searching for art in the Louvre'
    role = 'I completed this low-fidelity prototype as an exercise in wireframing and prototyping as well as getting more familiar with Sketch capabilities'
    process = "I identified the most frustrating part my experience on the Louvre's website, which was searching for artwork. I then, identified a flow that would make sense to a user searching for a category or partular work of art. I experimented with tagging the results by category in the results page and came to the final design decision seen in the prototype"
    img = '/assets/images/design/louvre-redesign.png'
    alt = 'screenshot of louvre redesign homepage'
    />
    <Footer />
    </>
  )

}

export default LouvreRedesign;
