// Components
import Header from './header';
import Footer from './footer';
import Noise from './noise';
import Menu from './menu';
import Scroll from './scroll';
import SocialMedia from './social';
import { Container, Wrapper, Main } from './styles';

const Layout = (props) => {
  const { children, switchThemes, theme } = props;

  return (
    <Container>
      <Wrapper>
        {/* <Noise /> */}
        {/* <Menu /> */}
        <Header theme={theme} switchThemes={switchThemes} />
        <SocialMedia theme={theme} />
        <Scroll />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
