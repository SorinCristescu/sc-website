import React, { useState } from 'react';
import UIfx from 'uifx';

// Components
import ReactAudioPlayer from 'react-audio-player';
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
  const [muted, setMuted] = useState(false);
  // const [play, setPlay] = useState(true);

  // const beep = new UIfx('/sounds/fun_tone.mp3');
  // const beep = new UIfx({ asset: '/sounds/fun_tone.mp3' });
  const handleMenu = () => {
    // beep.play();
    setOpenMenu(!openMenu);
  };

  const handleMuted = () => {
    setMuted(!muted);
    // setPlay(!play);
  };

  return (
    <Container>
      <ReactAudioPlayer
        src="/sounds/deepblue.mp3"
        autoPlay
        muted={muted}
        // controls
        volume={1}
        loop
      />
      <Cursor />
      <Wrapper>
        {/* <Noise /> */}
        <Menu handleMenu={handleMenu} openMenu={openMenu} />
        <Header
          handleMuted={handleMuted}
          handleMenu={handleMenu}
          muted={muted}
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
