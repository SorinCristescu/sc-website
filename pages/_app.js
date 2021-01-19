import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { VFXProvider } from 'react-vfx';
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
      <VFXProvider>
        <Layout theme={theme} switchThemes={switchThemes}>
          <Component {...pageProps} />
        </Layout>
      </VFXProvider>
    </ThemeProvider>
  );
};

export default App;
