import React, {useRef, useState, useEffect} from 'react';
import {Col} from 'reactstrap';
import { BrowserView, MobileView } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioItem = (props)=> {

  const [hoverRef, isHovered] = useHover();

  function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const item = ref.current;
      if (item) {
        item.addEventListener('mouseover', handleMouseOver);
        item.addEventListener('mouseout', handleMouseOut);

        return () => {
          item.removeEventListener('mouseover', handleMouseOver);
          item.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current]
  );

  return [ref, value];
}

  return(
    <>
    <Col md={props.md} sm={props.sm}>
      <div className='portfolio-item mx-auto' ref={hoverRef}>
        <div className= {(isHovered ===true )? (`hover-effect active` ): (`hover-effect`)} tabindex='0'>
          <img className='img-fluid' src={props.image} alt={props.alt} />
          <div className='overlay'>
            <h2>{props.title}</h2>
            <a class='info' target={props.target} href={props.url}>Learn More <FontAwesomeIcon classname='fas' icon={props.icon} /><span class='sr-only'>{props.sr}</span></a>
          </div>
        </div>
      </div>
    </Col>
    </>
  )

}

export default PortfolioItem;
