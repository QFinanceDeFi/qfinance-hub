import React from "react";
import { useLocation } from "@reach/router"
import SEO from '../seo';
import Layout from "../Layout/Layout"
import PoolDetails from "./PoolDetails"
import Main from "../../templates/Main"

const PoolPage = () => {
    const location = useLocation();

    return (
        <Layout>
        <SEO title="Pool Details" />
            <Main>
                <PoolDetails address={location.pathname.replace("/pool/", "")} />
            </Main>
        </Layout>
    )
}

export default PoolPage;