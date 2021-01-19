import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import Footer from '../components/Footer';

const GotChart = (props) => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    headline = 'Game of Thrones Episode Ratings'
    lead = 'Featured on Codepen May 29th, 2019'
    description = 'Using ChartJS to graph Game of Thrones episode ratings over the course of 8 seasons.'
    listItem1 = 'JavaScript'
    listItem2 = 'ChartJS'
    listItem3 = 'jQuery'
    process = 'I used the ratings from IMDB for all Game of Thrones episodes to create a chart in which the user can compare and contrast the quality of the the show over time.'
    hash = 'dERzbj'
    />
    <Footer />
    </>
  )
}

export default GotChart;
