import React from 'react'
import Image from "../images/bh-headphones.jpg"
import "../components/layout.css"

const Services = () => (
    <div id="services">
           <h2>Services</h2>
           <div class="services-container">
            <div class="img-container-services">
                <img src={Image} />
            </div>
            <div>
                <p>
                    Big fucking paragraph
                </p>
            </div>
        </div>
    </div>
)

export default Services