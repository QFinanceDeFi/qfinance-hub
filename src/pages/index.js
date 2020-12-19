// Frameworks
import React from 'react';
import Hero from "../components/Home/Hero";

// Layout Components
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import Features from '../components/Home/Features';
import Main from "../templates/Main";

// Static Route
const IndexPage = () => {

    return (
        <Layout>
            <SEO title="QFinance"
                keywords={[`ethereum`, `bitcoin`, `crypto`, `defi`, `token`, `assets`, `erc20`, `invest`, `buy`]}
            />
            <Main>
                <Hero />
                <Features />                
            </Main>
        </Layout>
    );
};

export default IndexPage;
