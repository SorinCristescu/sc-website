import React, { useState } from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { VFXProvider } from "react-vfx";
import { darkTheme, lightTheme } from "./../styles/theme";
import Layout from "../layout";

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  const [theme, setTheme] = useState(darkTheme);
  const switchThemes = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <VFXProvider>
          <Layout theme={theme} switchThemes={switchThemes}>
            <Component {...pageProps} />
          </Layout>
        </VFXProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
