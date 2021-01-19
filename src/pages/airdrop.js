import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Main from "../templates/Main";
import Claim from "../components/Airdrop/Claim";

const Airdrop = () => {
    return (
        <Layout>
        <SEO title="QFI Airdrop" keywords={[`QFI`, `QFinance`, `airdrop`, `token`, `ethereum`, `crypto`]} />
        <Main>
            <Claim />
        </Main>
        </Layout>
    )
}

export default Airdrop;