import React, { Component } from 'react';
import Masthead from '../components/Masthead';
import Showcase from '../components/Showcase';
import ContactForm from '../components/ContactForm';
import MainJS from '../components/MainJS';

class Home extends Component {
  render(){
    return (
      <>
      <Masthead />
      <Showcase />
      <ContactForm />
      <MainJS />
      </>
    )
  }
}

export default Home;
