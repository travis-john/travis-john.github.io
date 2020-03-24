import React, {Component} from 'react';

class Masthead extends Component {
  render(){
    return (
      <section className="masthead bg-tertiary bg-tertiary--masthead text-center">
        <div className="container d-flex align-items-center flex-column">

          {/* Masthead Avatar Image */}
          <figure>
            <img className="masthead-avatar mb-5" src="assets/images/profile.png" alt="profile" />
          </figure>

          {/* Masthead Heading */}
          <h1 className="masthead-heading text-uppercase mb-0">Travis John</h1>

          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          {/* Masthead Subheading */}
          <h2 className="font-weight-light name-h2">Front End Developer & UX/UI Designer</h2>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a className="btn btn-outline-dark btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.codepen.io/travis_john"><span className="sr-only"> link to codepen profile opens in new tab </span>
                <i className="fab fa-fw fa-codepen"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-dark btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/travis_john"><span className="sr-only">link to dribbble profile opens in new tab </span>
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-dark btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://github.com/travis-john"><span className="sr-only">link to github opens in new tab </span>
                <i className="fab fa-fw fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-dark btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/travis-john-2377962a/"><span className="sr-only">link to linkedin profile opens in new tab </span>
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn btn-outline-dark btn-social text-center rounded-circle" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/travisjohnmedia"><span className="sr-only">link to twitter profile opens in new tab </span>
                <i className="fab fa-fw fa-twitter"></i>
              </a>
            </li>
          </ul>

          <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-dark" href="/assets/resume/travis-john-resume.pdf">
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </a>
          </div>

        </div>
      </section>
    )
  }
}

export default Masthead;
