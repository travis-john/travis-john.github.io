import React, {Component} from 'react';
import {Container, Row, Col, Button, FormGroup, Label, Input} from 'reactstrap';
import * as emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {ReactSVG} from 'react-svg';
import FloatLabels from '../utils/FloatLabels'
import SVG from '../svg/contact-me.svg';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, email, phone, message } = this.state
    let templateParams = {
      name: name,
      from_name: email,
      to_name: 'travis.wl.john@gmail.com',
      phone: phone,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_CoEOfvhu',
       templateParams,
      'user_1PHpdrWuvRCgUydhDyUoF'
     )
     this.resetForm()
   }

 resetForm() {
   this.setState({
     name: '',
     email: '',
     phone: '',
     message: '',
   });
 }


 handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render() {
    return (
      <>
      <Container className='p-3' id='contact'>
        <h2 className='text-center'>Contact Me </h2>
        <Row>
        <Col sm='12' md='6'>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-name">Name</Label>
            <Input type="text" name="email" id="respondent-name" placeholder="Name" />
          </FormGroup>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-email">Email</Label>
            <Input type="email" name="email" id="respondent-email" placeholder="Email" />
          </FormGroup>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-phone">Phone</Label>
            <Input type="phone" name="phone" id="respondent-phone" placeholder="Phone" />
          </FormGroup>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-message">Message</Label>
            <textarea class="form-control" name='message' id="respondent-message" rows="5" placeholder="Message" required="required" aria-invalid="false"></textarea>
          </FormGroup>
          <Button outline color='primary' size='lg' type='submit'>Submit <FontAwesomeIcon className='far' icon={faPaperPlane} /></Button>
        </Col>
        <Col sm='12' md='6'>
          <ReactSVG src={SVG}  beforeInjection={svg => {svg.setAttribute('style', 'width: 100%')}} />
        </Col>
        </Row>
      </Container>
      <FloatLabels />
      </>
    )
  }
}

export default Contact;
