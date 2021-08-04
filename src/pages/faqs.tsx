import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Accordion from "../components/Accordion/Accordion";
import Layout from "../components/Navigation/Layout";
import Seo from "../components/seo";

const FAQ: React.FC = () => {

    return (
        <Layout>
            <Seo title="QFinance FAQs" description="Read the QFinance FAQs and learn more about the QFinance DeFi ecosystem" />
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', background: 'rgba(50,50,50,0.6)'}}>
                <Accordion />
            </div>
        </Layout>
    );
}

export default FAQ;