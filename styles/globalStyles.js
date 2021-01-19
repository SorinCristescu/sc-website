import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Barlow font
  =========== */
@font-face {
  font-family: 'Barlow';
  font-style: thin;
  font-weight: 100;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Thin.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: semibold;
  font-weight: 600;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-SemiBold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: regular;
  font-weight: 400;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: medium;
  font-weight: 500;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Medium.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: light;
  font-weight: 300;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Light.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: extralight;
  font-weight: 200;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-ExtraLight.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: extrabold;
  font-weight: 800;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-ExtraBold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: bold;
  font-weight: 700;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Bold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow';
  font-style: black;
  font-weight: 900;
  font-display: swap;
  src: local('Barlow'), url(/fonts/Barlow/Barlow-Black.ttf) format('ttf');
}
/* Barlow Condensed font
  ======================= */
@font-face {
  font-family: 'Barlow Condensed';
  font-style: black;
  font-weight: 900;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Black.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: bold;
  font-weight: 700;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Bold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: extrabold;
  font-weight: 800;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-ExtraBold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: extralight;
  font-weight: 200;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-ExtraLight.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: light;
  font-weight: 300;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Light.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: medium;
  font-weight: 500;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Medium.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: regular;
  font-weight: 400;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: semibold;
  font-weight: 600;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-SemiBold.ttf) format('ttf');
}
@font-face {
  font-family: 'Barlow Condensed';
  font-style: thin;
  font-weight: 100;
  font-display: swap;
  src: local('Barlow Condensed'),
    url(/fonts/Barlow_Condensed/BarlowCondensed-Thin.ttf) format('ttf');
}
  html,body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
}

/* main {
  width: 100%;
  height: auto;
} */

h1 {
    font-style: black;
    font-weight: 900;
    font-size: 103px;
    letter-spacing: 0.79;
    line-height: 124px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color:  ${(props) => props.theme.colors.foreground};
    -webkit-text-fill-color: transparent;
  }

h2 {
  font-family: 'Barlow Condensed', sans-serif;
  font-style: semibold;
  font-weight: 600;
  color: ${(props) => props.theme.colors.foreground}
}

h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-style: semibold;
  font-weight: 600;
  color: ${(props) => props.theme.colors.foreground}
}

h4 {
  font-family: 'Barlow Condensed', sans-serif;
  font-style: semibold;
  font-weight: 600;
  font-size: 42px;
  letter-spacing: 0.32;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.foreground}
}

h5 {
  font-family: 'Barlow Condensed', sans-serif;
  font-style: semibold;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.89;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.foreground}
}

h6 {
  font-family: 'Barlow Condensed', sans-serif;
  font-style: regular;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.89;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.foreground}
}

p {
  font-family: 'Barlow', sans-serif;
  font-style: regular;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.14;
  color: ${(props) => props.theme.colors.foreground}
}

small {
  font-family: 'Barlow', sans-serif;
  font-style: regular;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.09;
  color: ${(props) => props.theme.colors.foreground}
} 
`;
