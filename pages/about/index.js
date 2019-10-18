import React from 'react';
import Layout from '../../components/layout/Layout'
import AboutPage from '../../components/pages/About/About'
import Head from 'next/head'

function About() {
  return (
    <Layout>
      <Head><title>About Page</title></Head>
      <AboutPage />
    </Layout>
    
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'navbar'],
})



export default About;
