import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { SVG } from './styles';
const Scroll = (props) => {
  const scroll = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [scroll.current],
      {
        duration: 1,
        x: '50px',
        opacity: 0,
      },
      {
        duration: 1,
        x: '0',
        opacity: 1,
        ease: 'power3.inOut',
      }
    );
  }, [scroll]);

  return (
    <SVG
      width="7px"
      height="18px"
      viewBox="0 0 7 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        ref={scroll}
        id="Home"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Desktop-HD"
          transform="translate(-1305.000000, -900.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <g
            id="right-arrow-(3)-copy-2"
            transform="translate(1308.500000, 909.000000) rotate(90.000000) translate(-1308.500000, -909.000000) translate(1300.000000, 906.000000)"
          >
            <path
              d="M16.28035,2.11965 L14.40535,0.24465 C14.19085,0.0301 13.8682,-0.03395 13.588,0.08205 C13.30775,0.19815 13.125,0.47165 13.125,0.77495 L13.125,1.9 L0.75,1.9 C0.3358,1.9 0,2.2358 0,2.65 C0,3.0642 0.3358,3.4 0.75,3.4 L13.125,3.4 L13.125,4.525 C13.125,4.82835 13.3077,5.10185 13.588,5.2179 C13.68075,5.2563 13.77825,5.275 13.87485,5.275 C14.07,5.275 14.26185,5.1988 14.4053,5.0553 L16.2803,3.1803 C16.57325,2.8874 16.57325,2.41255 16.28035,2.11965 Z"
              id="XMLID_15_"
            ></path>
          </g>
        </g>
      </g>
    </SVG>
  );
};

export default Scroll;