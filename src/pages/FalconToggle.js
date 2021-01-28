import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const FalconToggle = (props) => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    headline = 'Falcon Toggle'
    lead = 'Featured on Codepen May 29th, 2019'
    description = 'A stylized checkbox inspired by the jump to hyperspace'
    listItem1 = 'jQuery'
    listItem2 = 'Scss'
    listItem3 = 'Interactivity'
    process = 'Using SCSS and Jquery, I created a checkbox field that generates random stars and star positions upon page load. Upon clicking the checkbox, the checkbox changes state to recreate the iconic jump to hyperspace from Star Wars.'
    hash = 'dEqqzq'
    />
    <Footer />
    </>
  )
}

export default FalconToggle;
