import React from "react";
import { useLocation } from "@reach/router"
import SEO from '../components/seo';
import Layout from "../components/Layout/Layout"
import PoolDetails from "../components/Pool/PoolDetails"

const PoolPage = () => {
    const location = useLocation();

    return (
        <Layout>
        <SEO title="Pool Details" />
            <PoolDetails address={location.pathname.replace("/pool/", "")} />
        </Layout>
    )
}

export default PoolPage;