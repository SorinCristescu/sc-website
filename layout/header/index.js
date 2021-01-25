import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Button from '../../components/button';
import { Container, SVG } from './styles';

const Header = (props) => {
  const { switchThemes, theme, handleMenu, handleMuted, muted } = props;
  const logo = useRef(null);
  const sound = useRef(null);
  const evaluator = useRef(null);
  const dark = useRef(null);
  const ham = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        logo.current,
        evaluator.current,
        sound.current,
        dark.current,
        ham.current,
      ],
      {
        duration: 1.5,
        y: '-100%',
        opacity: 0,
      },
      {
        duration: 1.5,
        y: '0%',
        opacity: 1,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, [logo, sound, evaluator, dark, ham]);

  return (
    <Container>
      <Link href="/">
        <a ref={logo}>
          <h6>
            SORIN CRISTESCU
            <br />
            PRODUCTION
            <br />
            STUDIO
          </h6>
        </a>
      </Link>

      <nav>
        <div ref={evaluator}>
          <Button link path="/estimator" name="estimate project" />
        </div>
        {/* <div> */}
        <SVG
          ref={sound}
          onClick={handleMuted}
          className="svg-hoverable"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="15"
          viewBox="0 0 24 24"
        >
          {!muted ? (
            <path
              fill="#FFFFFF"
              d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm15.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"
            />
          ) : (
            <path
              fill="#FFFFFF"
              d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm11.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z"
            />
          )}
        </SVG>
        {/* </div> */}
        <SVG
          ref={dark}
          className="svg-hoverable"
          onClick={switchThemes}
          width="20px"
          height="15px"
          viewBox="0 0 35 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Sketches"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Tablet"
              transform="translate(-233.000000, -888.000000)"
              fill={theme === 'lightTheme' ? '#4802ff' : '#FFFFFF'}
              fillRule="nonzero"
            >
              <g
                id="Group-10-Copy"
                transform="translate(233.000000, 888.000000)"
              >
                <path
                  d="M26.3124788,13.5515494 C25.7094297,12.9477675 24.7356229,12.9477675 24.1325738,13.5515494 L20.5767004,17.1329764 L13.9442236,10.4528364 C13.3411745,9.84905453 12.3673677,9.84905453 11.7643186,10.4528364 L0.942095344,21.3528318 C0.344360762,21.9669297 0.353926834,22.9527954 0.963643164,23.5548255 C1.24724339,23.8349164 1.6270841,23.9943289 2.02431767,24 L32.9449556,24 C33.7987517,24.0049369 34.4949492,23.3119113 34.5,22.4518822 C34.5023895,22.0334976 34.3375438,21.6318522 34.0426383,21.3372604 L26.3124788,13.5515494 Z"
                  id="Path-Copy-2"
                ></path>
                <circle id="Oval-Copy" cx="22" cy="4.5" r="4.5"></circle>
              </g>
            </g>
          </g>
        </SVG>

        <SVG
          ref={ham}
          className="svg-hoverable"
          onClick={handleMenu}
          width="20px"
          height="15px"
          viewBox="0 0 20 17"
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
              id="Desktop"
              transform="translate(-52.000000, -85.000000)"
              stroke={theme === 'lightTheme' ? '#4802ff' : '#FFFFFF'}
              strokeWidth="2"
            >
              <g id="Group-Copy" transform="translate(52.000000, 86.000000)">
                <line
                  x1="0"
                  y1="0.5"
                  x2="19.9847574"
                  y2="0.5"
                  id="Path-2"
                ></line>
                <line
                  x1="0"
                  y1="7.5"
                  x2="19.9847574"
                  y2="7.5"
                  id="Path-2-Copy"
                ></line>
                <line
                  x1="0"
                  y1="14.5"
                  x2="19.9847574"
                  y2="14.5"
                  id="Path-2-Copy-2"
                ></line>
              </g>
            </g>
          </g>
        </SVG>
      </nav>
    </Container>
  );
};

export default Header;
