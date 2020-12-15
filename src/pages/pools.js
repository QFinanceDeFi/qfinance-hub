import React from "react"
import SEO from '../components/seo';
import Layout from "../components/Layout/Layout"
import Pools from "../components/Pools/Pools"
import Main from "../templates/Main"

const PoolsPage = () => {
    return (
        <Layout>
        <SEO title="Pools" />
            <Main>
                <Pools />
            </Main>
        </Layout>
    )
}

export default PoolsPage