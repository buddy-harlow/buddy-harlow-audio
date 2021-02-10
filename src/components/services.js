import React from 'react'
import Image from "../images/Studio.jpg"
import "../components/layout.css"

const Services = () => (
    <div>
           <h2>Services</h2>
    <div id="services">
        <div class="service-box">
            <div class="img-container-services">
                <img src={Image}/>
            </div>
            <h3>Tracking</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo dui, efficitur placerat felis eget, lacinia dapibus nibh. In mattis vulputate tellus. Sed rutrum luctus justo ut hendrerit. Nunc ultrices interdum vulputate. Ut bibendum, justo at suscipit ornare, urna erat ornare enim, eu sodales purus neque nec ligula. Proin euismod egestas mauris, id dapibus magna pulvinar a. Praesent eget ullamcorper diam, ut tempor nibh.
            </p>
        </div>
        <div class="service-box">
            <div class="img-container-services">
            <img src={Image}/>
            </div>
            <h3>Mixing</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo dui, efficitur placerat felis eget, lacinia dapibus nibh. In mattis vulputate tellus. Sed rutrum luctus justo ut hendrerit. Nunc ultrices interdum vulputate. Ut bibendum, justo at suscipit ornare, urna erat ornare enim, eu sodales purus neque nec ligula. Proin euismod egestas mauris, id dapibus magna pulvinar a. Praesent eget ullamcorper diam, ut tempor nibh.
            </p>
        </div>
        <div class="service-box">
            <div class="img-container-services">
            <img src={Image}/>
            </div>
            <h3>Mastering</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo dui, efficitur placerat felis eget, lacinia dapibus nibh. In mattis vulputate tellus. Sed rutrum luctus justo ut hendrerit. Nunc ultrices interdum vulputate. Ut bibendum, justo at suscipit ornare, urna erat ornare enim, eu sodales purus neque nec ligula. Proin euismod egestas mauris, id dapibus magna pulvinar a. Praesent eget ullamcorper diam, ut tempor nibh.
            </p>
        </div>
    </div>
    </div>
)

export default Services