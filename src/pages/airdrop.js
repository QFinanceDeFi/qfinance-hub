import React from "react";
import Layout from "../components/Layout/Layout";
import Main from "../templates/Main";
import SignUp from "../components/Airdrop/SignUp";

const Airdrop = () => {
    return (
        <Layout>
        <Main>
            <SignUp />
        </Main>
        </Layout>
    )
}

export default Airdrop;