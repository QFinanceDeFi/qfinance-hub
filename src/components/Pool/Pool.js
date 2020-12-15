import React from "react";
import { useLocation } from "@reach/router"
import SEO from '../seo';
import Layout from "../Layout/Layout"
import PoolDetails from "./PoolDetails"

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