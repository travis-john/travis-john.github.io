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
    link = '/assets/images/design/email-template-library.sketch'
    headline = 'Email Template Library'
    lead = 'A library of standard and uniquely-branded email templates'
    users = 'Any user searching for information on Cisco.com'
    role = 'Designer and developer'
    process = "Customer interviews revealed the fact that our intended recipients of Cisco CX emails were, in large part, not opening them at all. Even though these emails contained very important information regarding their Cisco product. This came from the perception that all emails from Cisco were marketing emails and, therefore, not relevant to their immediate needs. We set about the task of making emails not appear as marketing emails. I came up with a design library where we relied on old design principles of typographical hierarchy, evenly spaced modules, 1 primary CTA, and underlined hyperlinks. In addition to the establishing the general design principles, I wrote the initial markup for the emails that was implemented in Saleforce Marketing Cloud."
    img = '/assets/images/design/email-template-action-item.png'
    alt = 'screenshot of example email'
    />
    <ScrollTop />
    <Footer />
    </>
  )

}

export default EmailTemplateLibrary;
