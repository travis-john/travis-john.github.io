import React from 'react';
import MainNav from '../components/MainNav';
import Masthead from '../components/Masthead';
import Showcase from '../components/Showcase';
import Contact from '../components/Contact';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const Home = () => {

  return(
    <>
    <MainNav />
    <ScrollTop />
    <Masthead />
    <Showcase />
    <Contact />
    <Footer />
    </>
  )
}

export default Home;
