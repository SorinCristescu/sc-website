import React, { useState } from 'react';

// Components
import Header from './header';
import Footer from './footer';
import Noise from './noise';
import Menu from './menu';
import Cursor from './cursor';
import Scroll from './scroll';
import SocialMedia from './social';
import { Container, Wrapper, Main } from './styles';

const Layout = (props) => {
  const { children, switchThemes, theme } = props;
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <Container>
      <Cursor />
      <Wrapper>
        {/* <Noise /> */}
        <Menu handleMenu={handleMenu} openMenu={openMenu} />
        <Header
          handleMenu={handleMenu}
          theme={theme}
          switchThemes={switchThemes}
        />
        <SocialMedia theme={theme} />
        <Scroll />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
