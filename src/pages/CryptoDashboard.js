import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import Footer from '../components/Footer';

const CryptoDashboard = () => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    hasImage='true'
    headline = 'Crypto Dashboard'
    lead = 'A cryptocurrency tracking tool'
    description = 'An all-in-one cryptocurrency news and tracking tool that allows users to log in, track their favorite currencies and save favorites to their profile.'
    repo = 'https://github.com/travis-john/dolla-dolla-bills'
    listItem1 = 'JavaScript'
    listItem2 = 'APIs'
    listItem3 = 'Firebase Authentication'
    process = 'Working with a group of two others, we created this dashboard for our first project as part of the UNC Coding Bootcamp. I was in charge of coding all of the API calls and rendering the needed UI elements based on the number of responses. I also handled the log in logic and dynamic page rendering.'
    img='/assets/images/development/financial-dashboard.png'
    alt='screenshot of cryptocurrency dashboard'
    link='https://travis-john.github.io/dolla-dolla-bills'
    />
    <Footer />
    </>
  )
}

export default CryptoDashboard;
