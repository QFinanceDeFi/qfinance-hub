import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"
import Footer from "../Footer/Footer"

const Layout: React.FC<any> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
