import React from 'react';
import Layout from '../components/Layout/Layout';
import Main from "../templates/Main";
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Main>
      <h1>ROUTE NOT FOUND</h1>
    </Main>
  </Layout>
);

export default NotFoundPage;
