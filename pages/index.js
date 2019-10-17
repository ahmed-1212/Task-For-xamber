import React from 'react';
import Layout from '../components/layout/Layout'
import HomePage from '../components/pages/Home/Home'
import Head from 'next/head'
function Home() {
  return (
    <Layout>
      <Head><title>Home Page</title></Head>
      <HomePage />
    </Layout>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'navbar'],
})

export default Home;
