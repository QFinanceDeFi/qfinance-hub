import * as React from "react"
import Layout from "../components/Navigation/Layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <p>
      Hmmm. Can't seem to find this page.
    </p>
  </Layout>
)

export default NotFoundPage
