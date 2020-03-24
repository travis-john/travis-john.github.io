import React from 'react';

const ScrollTop = () => {
  return (
    <div className="scroll-to-top position-fixed ">
      <a className="js-scroll-trigger d-block text-center rounded" href="#page-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  )
}

export default ScrollTop;
