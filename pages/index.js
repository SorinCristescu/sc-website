import Head from "next/head";
import { Page, Text } from "@geist-ui/react";

const Home = () => {
  return (
    <Page>
      <Head>
        <title>Sorin Cristescu website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>My website</Text>
    </Page>
  );
};

export default Home;
