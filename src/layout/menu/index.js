import Link from 'next/link';
import { Container } from './styles';

const Menu = ({ handleMenu, openMenu }) => {
  return (
    <Container openMenu={openMenu}>
      <svg
        onClick={handleMenu}
        width="18px"
        height="17px"
        viewBox="0 0 18 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Menu_close_white"
            transform="translate(-19.000000, -20.000000)"
            fill="#FAFAFB"
          >
            <g id="Group-5">
              <g transform="translate(19.000000, 20.000000)">
                <rect
                  id="Rectangle-Copy-17"
                  transform="translate(9.000000, 8.500000) rotate(45.000000) translate(-9.000000, -8.500000) "
                  x="-1"
                  y="7"
                  width="20"
                  height="3"
                ></rect>
                <rect
                  id="Rectangle-Copy-18"
                  transform="translate(9.000000, 8.500000) scale(-1, 1) rotate(45.000000) translate(-9.000000, -8.500000) "
                  x="-1"
                  y="7"
                  width="20"
                  height="3"
                ></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <Link href="/">
        <a>
          <h3 onClick={handleMenu}>Home</h3>
        </a>
      </Link>
      <Link href="/services">
        <a>
          <h3 onClick={handleMenu}>Services</h3>
        </a>
      </Link>
      <Link href="/portfolio">
        <a>
          <h3 onClick={handleMenu}>Portfolio</h3>
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <h3 onClick={handleMenu}>Blog</h3>
        </a>
      </Link>
      <Link href="/estimator">
        <a>
          <h3 onClick={handleMenu}>Estimator</h3>
        </a>
      </Link>
      <Link href="/login">
        <a>
          <h3 onClick={handleMenu}>Login</h3>
        </a>
      </Link>
      <Link href="/">
        <a>
          <h3 onClick={handleMenu}>Logout</h3>
        </a>
      </Link>
      <Link href="/register">
        <a>
          <h3 onClick={handleMenu}>Register</h3>
        </a>
      </Link>
      <Link href="/dashboard">
        <a>
          <h3 onClick={handleMenu}>Dashboard</h3>
        </a>
      </Link>
    </Container>
  );
};

export default Menu;
