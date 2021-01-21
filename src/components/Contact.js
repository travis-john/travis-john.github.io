import React, {Component} from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import * as emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import {ReactSVG} from 'react-svg';
import FloatLabels from '../utils/FloatLabels'
import SVG from '../svg/contact-me.svg';

class Contact extends Component {

  constructor(props){

    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault()
    const { name, email, phone, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'travis.wl.john@gmail.com',
      subject: 'A message from your Portfolio Contact Form',
      phone: phone,
      message_html: message,
    };
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


 handleChange(event) {
   this.setState({ [event.target.name]: event.target.value });
 }

  render() {

    const {name, email, phone, message } = this.state;
    return (
      <>
      <Container className='p-3' id='contact'>
        <h2 className='text-center'>Contact Me </h2>
        <Row>
        <Col sm='12' md='6'>
          <Form onSubmit={this.handleSubmit}>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-name">Name</Label>
            <Input type="text" name="name" id="respondent-name" placeholder="Name" value={name} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-email">Email</Label>
            <Input type="email" name="email" id="respondent-email" placeholder="Email" value={email} onChange={this.handleChange} />
          </FormGroup>
          {/*<FormGroup className='floating-label-form-group'>
            <Label for="respondent-phone">Phone</Label>
            <Input type="phone" name="phone" id="respondent-phone" placeholder="Phone" value={phone} onchange={this.handleChange} />
          </FormGroup>*/}
          <FormGroup className='floating-label-form-group'>
            <Label for="respondent-message">Message</Label>
            <Input type='textarea' name='message' id='respondent-message' rows="5" placeholder='Type your message' required='required' value={message} onChange={this.handleChange} />
          </FormGroup>
          <Button outline color='primary' size='lg' type='submit'>Submit <FontAwesomeIcon className='far' icon={faPaperPlane} /></Button>
          </Form>
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
