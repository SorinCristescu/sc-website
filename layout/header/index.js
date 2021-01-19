import Link from 'next/link';
import Button from '../../components/button';
import { Container, SVG } from './styles';

const Header = (props) => {
  const { switchThemes, theme } = props;
  const handleClick = () => {
    console.log('click');
  };
  const handleFill = () => {
    if (theme === 'darkTheme') {
      return '#FFFFFF';
    } else if (theme === 'lightTheme') {
      return '#4802ff';
    }
  };
  return (
    <Container>
      <Link href="/">
        <a>
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
        <Button link path="/estimator" name="estimate project" />
        <SVG
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
          onClick={handleClick}
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
