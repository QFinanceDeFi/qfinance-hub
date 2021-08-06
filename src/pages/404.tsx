import * as React from "react"
import Layout from "../components/Navigation/Layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div style={{display: 'flex', flexDirection: 'column', padding: '48px 24px'}}>
      <h1>404</h1>
      <p>
        Hmmm. Can't seem to find this page.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
