import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import CaseStudy from '../components/CaseStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const MediaTruist = () => {
  return (
    <>
    <SecondaryNav />
    <CaseStudy
    headline = 'media.truist.com'
    lead = 'Before BBT and Suntrust were approved to merge by the FTC, there was an proactive effort to have content in place for that day.'
    users = 'Industry analysts and the general public interested in the latest updates in the merger process'
    role = 'I was tasked to identify a design a layout and elements that would be necessary to convey information that would continually be updated. Emphasis was on relevance of information and the speed at which it would need to be updated. I led the effort to design the first iteration of this page in coordination with the project manager in charge of this effort, the BBT digital marketing team, and the development team to work determine the scope of what could be changed in time for launch.'
    process = 'After learning what pieces of Truist marketing, my main task was determining the hierarchy of the information. I determined which parts of the page would be continually updated and gave them first priority after the masthead. Next, would be relevant personifying corporate information that would be in place to assure customers and analysts that the merged corporation would not be a new, faceless entity, but run with the same values and same people as the two previous corporations were. The two final elements on the page were there to serve as information that would never be updated.'
    img = '/assets/images/design/media-truist-full.png'
    alt = 'screenshot of initial media.truist.design'
    />
    <Footer />
    </>
  )
}

export default MediaTruist;
