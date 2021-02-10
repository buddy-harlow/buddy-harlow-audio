import React from 'react'
import Portrait from "../images/BuddyHarlowPortrait.jpg"
import "../components/layout.css"

const about = () => (
    <div class="about">
    <div id="portrait">
        <img src={Portrait}/>
    </div>
    <div class="aboutMe">
    <h1>About</h1>
        <p>Howdy my names Buddy Harlow and I'm an audio engineer based out of Newport News, VA. I got my
        start working on my own personal projects and I just grew from there. My favorite records are ones 
        with a lot of character, a lot of space, and hit you in the chest. I specialize in heavier genres
        but absolutely love working on any types of music.</p> 
        <p>Even though I'm based out of Newport News I'm more than willing to travel for a tracking session. 
        My main goal is to make good sounding records with good people. Send me and email if you would like 
        to talk about your project! </p>

    </div>
</div>
)

export default about