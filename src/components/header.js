import React from 'react'
import Image from "../images/BHAC-white-03.png"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import "../components/layout.css"

const Header = () => (
    <div>
    <SEO title="Home" />
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="John Doe"></meta>
    <div class="img-container">
      <div class="inner-container">
        <img src={Image}/>
      </div>
    </div>
    <div class="full-width-bar">
        <p>Want a free test master? Fill out the contact below.</p>
    </div>
    </div>
)
export default Header

