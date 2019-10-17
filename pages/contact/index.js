import React from 'react';
import Layout from '../../components/layout/Layout'
import ContactPage from '../../components/pages/Contact/Contact'
import Head from 'next/head'

function Contact() {
  return (
    <Layout>
      <Head><title>Contact Page</title></Head>
      <ContactPage />
    </Layout>
    
  );
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer', 'navbar'],
})

export default Contact;
