import Head from 'next/head';
import styled from 'styled-components';

import Button from '../components/button';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Sorin Cristescu Studio Production</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          I design unique
          <br />
          web experience
        </h1>
        <Button link name="see what I do" path="/portfolio" />
      </main>
    </div>
  );
};

export default Home;
