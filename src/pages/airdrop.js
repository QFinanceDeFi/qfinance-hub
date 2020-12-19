import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Main from "../templates/Main";
import SignUp from "../components/Airdrop/SignUp";

const Airdrop = () => {
    return (
        <Layout>
        <SEO title="QFI Airdrop" keywords={[`QFI`, `QFinance`, `airdrop`, `token`, `ethereum`, `crypto`]} />
        <Main>
            <SignUp />
        </Main>
        </Layout>
    )
}

export default Airdrop;