import Head from "next/head";
import { Page, Text } from "@geist-ui/react";

const Signin = () => {
  return (
    <Page>
      <Head>
        <title>Sorin Cristescu website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>Sign in page </Text>
    </Page>
  );
};

export default Signin;
