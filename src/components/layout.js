/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <div>
        <main>{children}</main>
        <footer>
        <div class="full-width-bar">
          <p id="site-bottom-tag">Made by the Big Ole Website Guy&copy; 2020</p>
        </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
