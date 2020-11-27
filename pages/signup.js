import Head from "next/head";
import { Page, Text } from "@geist-ui/react";

const Signup = () => {
  return (
    <Page>
      <Head>
        <title>Sorin Cristescu website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>Sign up page</Text>
    </Page>
  );
};

export default Signup;
