import React from 'react';
import styled from "styled-components";

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

import Links from "../components/Learn/Links"
import Learn from "../components/Learn/Learn"
import Main from "../templates/Main"

const LearnPage = () => (
  <Layout>
    <SEO title="Learn More" 
      keywords={[`ethereum`, `bitcoin`, `what is`, `crypto`, `token`, `assets`, `erc20`, `invest`, `buy`]}
    />
    <LearnNav>
      <Links />
    </LearnNav>
    <Main>
      <Learn />
    </Main>
  </Layout>
);

export default LearnPage;

const LearnNav = styled.div
`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 64px;
  padding: 8px 2vw;
  margin-bottom: 12px;
  background: black;
  color: white;
`