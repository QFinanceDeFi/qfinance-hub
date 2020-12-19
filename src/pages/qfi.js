import React from "react"
import SEO from '../components/seo';
import Layout from "../components/Layout/Layout"
import Token from "../components/Token/Token"
import Main from "../templates/Main"

const QFI = () => {
    return (
        <Layout>
        <SEO title="QFI Token"
            keywords={[`ethereum`, `earn`, `erc20`, `token`, `crypto`, `qfi`, `qfinance`]}
        />
            <Main>
                <Token />
            </Main>
        </Layout>
    )
}

export default QFI;