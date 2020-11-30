import Head from "next/head";
import PropTypes from "prop-types";

import Header from "../components/header";
import Noise from "../components/noise";
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Noise />
      <Header />
      {children}
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
