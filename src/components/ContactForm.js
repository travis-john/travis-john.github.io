import React from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';

const ContactForm = () => {
  return (
    <section className="page-section" id="contact">
      <Container>

        {/* Contact Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

        {/* Icon Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* Contact Section Form */}
        <Row>
          <Col size='lg-2' />
          <Col size='lg-8'>
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label htmlFor='name'>Name</label>
                  <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label htmlFor='email'>Email Address</label>
                  <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label htmlFor='phone'>Phone Number</label>
                  <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label htmlFor='message'>Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-outline-dark btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </Col>
          <Col size='lg-2' />
        </Row>

      </Container>
    </section>
  )
}

export default ContactForm;
