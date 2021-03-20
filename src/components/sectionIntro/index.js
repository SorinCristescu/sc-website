import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, Intro } from "./styles";

const SectionIntro = (props) => {
  const { children, intro, title, texts } = props;

  const titleAnimation = useRef(null);
  const textAnimation = useRef(null);

  useEffect(() => {}, []);

  return (
    <Container>
      <Intro>
        <svg
          width="71px"
          height="1px"
          viewBox="0 0 80 1"
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
              transform="translate(-129.000000, -1005.000000)"
              stroke="#FFFFFF"
            >
              <g
                id="Group-5-Copy-4"
                transform="translate(129.000000, 999.000000)"
              >
                <line x1="0.5" y1="6.5" x2="79.5" y2="6.5" id="Path-5"></line>
              </g>
            </g>
          </g>
        </svg>
        <h6>{intro}</h6>
      </Intro>

      <h4 ref={titleAnimation} style={{ margin: "30px 0 50px 0" }}>
        {title}
      </h4>
      {texts.map((text, index) => {
        return (
          <p key={index} style={{ margin: "10px 0" }}>
            {text}
          </p>
        );
      })}

      {children}
    </Container>
  );
};

SectionIntro.propTypes = {
  intro: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  texts: PropTypes.array.isRequired,
  children: PropTypes.element,
};

export default SectionIntro;
