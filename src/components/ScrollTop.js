import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const ScrollTop = (props) => {

  useEffect(()=>{

    window.addEventListener('scroll', handleScroll);

  });

  let [scrolling, updatehandlescroll] = useState(false);

  const handleScroll = (props) => {

  window.onscroll = function() {
      if(window.pageYOffset === 0) {
        updatehandlescroll(scrolling=false)
      } else {
        updatehandlescroll(scrolling=true);
      }
    };
  }

  return (
    <>
      <div className={ (scrolling===true )? (`scrolltop--container` ): (`scrolltop--container d-none`)}>
        <FontAwesomeIcon className='fas scroll-top--icon' icon={faArrowUp} />
      </div>
    </>
  )

}

export default ScrollTop;
