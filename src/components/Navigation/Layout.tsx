import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"
import Footer from "../Footer/Footer"

const Layout: React.FC<any> = ({ children }) => {

  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
