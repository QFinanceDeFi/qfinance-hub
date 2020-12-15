import React from "react"
import SEO from '../components/seo';

import CreatePool from "../components/Pools/CreatePool"
import Layout from '../components/Layout/Layout';
import Narrow from '../templates/Narrow'

const CreatePage = () => {
    return (
        <Layout>
        <SEO title="Create Pool" />
            <Narrow>
                <CreatePool />
            </Narrow>
        </Layout>
    )
}

export default CreatePage