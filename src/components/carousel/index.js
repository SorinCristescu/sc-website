import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Button from "../button";
import { Container, Counter, Navigation } from "./styles";

const Carousel = ({ content, minWidth }) => {
  const { title, subtitle, path, id, linkName } = content;
  const [current, setCurrent] = React.useState(0);
  const countAnimation = useRef(null);
  const titleAnimation = useRef(null);
  const subtitleAnimation = useRef(null);

  useEffect(() => {}, []);

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handlePrev = () => {
    setCurrent(current - 1);
  };
  return (
    <Container minWidth={minWidth}>
      <Counter>
        <p ref={countAnimation}>{content[current].id}</p>
        <svg
          width="13px"
          height="3px"
          viewBox="0 0 13 3"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Home"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-232.000000, -2316.000000)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            >
              <line
                x1="232.602419"
                y1="2317.69129"
                x2="244.910771"
                y2="2317.69129"
                id="Path-3"
              ></line>
            </g>
          </g>
        </svg>
      </Counter>
      {content[current].title === "" ? null : (
        <h4 ref={titleAnimation} style={{ margin: "30px 0 0 0" }}>
          {content[current].title}
        </h4>
      )}
      <p ref={subtitleAnimation} style={{ margin: "30px 0" }}>
        {content[current].subtitle}
      </p>
      <Button
        link
        path={content[current].path}
        name={content[current].linkName}
        minWidth={minWidth}
      />
      <Navigation>
        <svg
          className="svg-hoverable prev"
          onClick={handlePrev}
          width="17px"
          height="6px"
          viewBox="0 0 17 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Home"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-230.000000, -867.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <g
                id="right-arrow-(3)-copy"
                transform="translate(238.500000, 870.000000) scale(-1, 1) translate(-238.500000, -870.000000) translate(230.000000, 867.000000)"
              >
                <path
                  d="M16.28035,2.11965 L14.40535,0.24465 C14.19085,0.0301 13.8682,-0.03395 13.588,0.08205 C13.30775,0.19815 13.125,0.47165 13.125,0.77495 L13.125,1.9 L0.75,1.9 C0.3358,1.9 0,2.2358 0,2.65 C0,3.0642 0.3358,3.4 0.75,3.4 L13.125,3.4 L13.125,4.525 C13.125,4.82835 13.3077,5.10185 13.588,5.2179 C13.68075,5.2563 13.77825,5.275 13.87485,5.275 C14.07,5.275 14.26185,5.1988 14.4053,5.0553 L16.2803,3.1803 C16.57325,2.8874 16.57325,2.41255 16.28035,2.11965 Z"
                  id="XMLID_15_"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          className="svg-hoverable next"
          onClick={handleNext}
          width="17px"
          height="6px"
          viewBox="0 0 17 6"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Home"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Desktop-HD"
              transform="translate(-376.000000, -867.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <g
                id="right-arrow-(3)"
                transform="translate(376.000000, 867.000000)"
              >
                <path
                  d="M16.28035,2.11965 L14.40535,0.24465 C14.19085,0.0301 13.8682,-0.03395 13.588,0.08205 C13.30775,0.19815 13.125,0.47165 13.125,0.77495 L13.125,1.9 L0.75,1.9 C0.3358,1.9 0,2.2358 0,2.65 C0,3.0642 0.3358,3.4 0.75,3.4 L13.125,3.4 L13.125,4.525 C13.125,4.82835 13.3077,5.10185 13.588,5.2179 C13.68075,5.2563 13.77825,5.275 13.87485,5.275 C14.07,5.275 14.26185,5.1988 14.4053,5.0553 L16.2803,3.1803 C16.57325,2.8874 16.57325,2.41255 16.28035,2.11965 Z"
                  id="XMLID_15_"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Navigation>
    </Container>
  );
};

Carousel.propTypes = {
  content: PropTypes.array.isRequired,
  minWidth: PropTypes.string.isRequired,
};

export default Carousel;
