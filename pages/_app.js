import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { darkTheme, lightTheme } from './../styles/theme';
import Layout from '../layout';

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(darkTheme);
  const switchThemes = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout theme={theme} switchThemes={switchThemes}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
