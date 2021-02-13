import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "gatsby-image"




const IndexPage = (props) => (
  <Layout>
    <div>
      <SEO title="Home" />
        <div class="img-container">
          <BackgroundImage fluid={props.data.bgi.childImageSharp.fluid} alt="Image inside the studio showing monitoring setup and mix position">
            <div class="inner-container" id="logo">
              <Img fluid={props.data.bhLogo.childImageSharp.fluid} alt="Buddy Harlow Audio Co. Logo"/>
            </div>
          </BackgroundImage>
        </div>
        <div class="full-width-bar">
          <p>Want a free test master? Fill out the contact below.</p>
        </div>
        
       
     
    </div>

    <div id="portfolio">
    <h2>Portfolio</h2>
        <div class="portfolio">
            
            <iframe width="100%" height="450" title="Buddy Harlow Portfolio" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1152216199%3Fsecret_token%3Ds-LWrzLmTFMR6&color=%23be1e2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <div class="iframe-container port-right">
                <iframe src="https://www.youtube.com/embed/ragnoP0IfWg" frameborder="0" title="Garrett Coffman drum playthrough video tracked and mixed by Buddy Harlow"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>    
        </div>


        <div class="about">
    <div id="portrait">
        <Img fixed={props.data.bhPortrait.childImageSharp.fixed} alt="Portrait of Buddy Harlow"/>
    </div>
    <div id="about" class="aboutMe">
    <h2>About</h2>
        <p>Howdy, my name's Buddy Harlow and I am an audio engineer based out of Newport News, Va having originally began my journey in Harrisonburg, VA. My goals as an audio engineer center around translating an artists goals into the audio production domain.
          In audio production collaboration and communication are key to making a cohesive sounding piece, and that's why I put in the extra work to make sure we're on the same page.</p> 
        <p>Even though I'm based out of Newport News I'm more than willing to travel for a tracking session. My main goal is to make good sounding records with good people. Send me and email if you would like to talk about your project!</p>
    </div>
  </div>
  <div id="contact">
    <h2>Contact</h2>
    <form name="contact" id="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
      <input name="name" type="text" placeholder="Name" />
      <input name="email" type="email" placeholder="Email" />
      <input name="phone-number" type="text" placeholder="Phone Number" />
      <textarea name="message" rows="5"placeholder="Message"/>
      <button type="submit">Submit</button>
    </form>

  </div>
  
  </div>
   
   
  </Layout>
)

export default IndexPage;

export const pageQuery = graphql`
query{
  bgi: file(relativePath: {eq: "Studio.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  bhLogo: file(relativePath: {eq: "BHAC-white-03.png"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  bhPortrait: file(relativePath: {eq: "BuddyHarlowPortrait.jpg"}) {
    childImageSharp {
      fixed(width: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`