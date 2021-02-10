import React from "react"
import "../components/layout.css"

const Portfolio = () => (
    <div>
    <h2>Portfolio</h2>
        <div class="portfolio">
            <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1152216199%3Fsecret_token%3Ds-LWrzLmTFMR6&color=%23be1e2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <div class="link-container">
            <a href="https://soundcloud.com/buddy-harlow-660681487/sets/audio-portfolio/s-LWrzLmTFMR6" title="Audio Portfolio" target="_blank">Buddy Harlow Audio Portfolio</a>
        </div>
            <div class="iframe-container">
                <iframe src="https://www.youtube.com/embed/ragnoP0IfWg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>    
        </div>
    </div>
)

export default Portfolio