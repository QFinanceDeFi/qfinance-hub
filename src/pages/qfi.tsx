import React from "react";
import Layout from "../components/Navigation/Layout";
import Seo from "../components/seo";
import Distribution from "../components/TokenInfo/Distribution";
import TokenInfo from "../components/TokenInfo/TokenInfo";

const QFI: React.FC = () => {
    return (
        <Layout>
            <Seo title="QFI Token" description="QFI - native ERC20 token of the QFinance Ethereum DeFi platform." />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
                <TokenInfo />
                <Distribution />
            </div>
        </Layout>
    )
}

export default QFI;