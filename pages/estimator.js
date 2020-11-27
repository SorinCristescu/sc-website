import Head from "next/head";
import { Page, Text } from "@geist-ui/react";

const Estimator = () => {
  return (
    <Page>
      <Head>
        <title>Sorin Cristescu website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text h1>Estimator page</Text>
    </Page>
  );
};

export default Estimator;
