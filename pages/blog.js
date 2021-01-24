import Head from 'next/head';
import styled from 'styled-components';
import PageTitle from '../components/pageTitle';
const Blog = (props) => {
  return (
    <div>
      <Head>
        <title>Sorin Cristescu Studio Production</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageTitle title="blog" />
      </main>
    </div>
  );
};

export default Blog;
