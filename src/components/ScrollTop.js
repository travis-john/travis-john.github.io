import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const ScrollTop = (props) => {

  useEffect(()=>{

    window.addEventListener('scroll', checkScrollTop);

  });

  let [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = (props) => {

  if (!showScroll && window.pageYOffset >= 1){
    setShowScroll(true);
    } else if (showScroll && window.pageYOffset < 1){
      setShowScroll(false)
    }
  };

  return (
    <>
      <Link to="page-top" spy={true} smooth={true} duration={800} className={ (showScroll===true )? (`scrolltop--container` ): (`scrolltop--container d-none`)}>
        <FontAwesomeIcon className='fas scroll-top--icon' icon={faArrowUp} />
      </Link>
    </>
  )

}

export default ScrollTop;
