import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

import Header from "../components/header"
import About from "../components/about"
import Services from "../components/services"
import Portfolio from "../components/portfolio"


const IndexPage = () => (
  <Layout>
    <Header/>
    <About />
    <Services />
    <Portfolio />
  </Layout>
)

export default IndexPage
