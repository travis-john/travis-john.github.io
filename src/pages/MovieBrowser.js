import React from 'react';
import SecondaryNav from '../components/SecondaryNav';
import DevStudy from '../components/DevStudy';
import Footer from '../components/Footer';

const MovieBrowser = () => {
  return(
    <>
    <SecondaryNav />
    <DevStudy
    hasImage='true'
    headline = 'movieBrowser'
    lead = 'An movie aggregator site'
    description = 'movieBrowser is an application that allows for perusing, searching, and saving for the latest in movie entertainment.'
    repo = 'https://github.com/travis-john/project2'
    listItem1 = 'Node.js'
    listItem2 = 'Handlebars.js'
    listItem3 = 'MYSQL'
    process = 'Working with a group of two others, this was my second project for the UNC Coding Bootcamp. I was responsible for the designing the Handlebars templates, styling the pages, and handling dynamic rendering based on guest or logged-in states.'
    img='/assets/images/development/movieBrowser.png'
    alt='screenshot of movieBrowser homepage'
    link='https://whispering-dawn-54949.herokuapp.com/'
    />
    <Footer />
    </>
  )
}

export default MovieBrowser;
