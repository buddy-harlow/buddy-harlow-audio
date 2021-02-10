import React from 'react'
import "../components/layout.css"

const Contact = () => (
    <div>
        <h2>Contact me</h2>
   <div class="contact-section">

    <form class="contact-form" action="https://mailthis.to/Bharlow" 
    method="POST"> 
        <input type="text" name="name" placeholder="Your name" class="textb" required /> 
        <input type="email" name="_replyto" placeholder="Your email" class="textb" required /> 
        <input type="hidden" name="_honeypot" value="" />
        <textarea name="message" placeholder="Enter your message here" class="textb" required />
        <input type="submit" value="Send" class="send-btn" /> 
    </form> 
    
    <div class="contact-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum consectetur augue, at interdum ex. Fusce porttitor, mauris ac gravida euismod, nisl odio semper magna, nec auctor massa turpis venenatis ante. In sapien mauris, finibus non turpis quis, tempor semper massa. Nullam laoreet fringilla lectus, eu rutrum nisl tempor ut. Duis blandit et massa eu dictum. Aenean placerat, sem eu aliquet rutrum, erat elit hendrerit nibh, vitae eleifend purus elit sed justo. Mauris sed volutpat turpis, id facilisis felis.

            Aenean sit amet tempus purus, vitae tristique felis. Aliquam nibh magna, lobortis sit amet efficitur sit amet, feugiat sed mi. Morbi eget elementum lectus. Integer ac nulla posuere, commodo dolor bibendum, rhoncus elit. Vivamus non varius est, sit amet iaculis massa. Vivamus sodales et neque a tristique. Vestibulum luctus tortor vitae ultricies consectetur. Fusce dignissim lacus rhoncus, maximus dui vel, pharetra sapien. Nunc luctus in arcu feugiat luctus. Vivamus venenatis odio sit amet rhoncus fermentum. Mauris consectetur arcu sed tempus aliquam. Sed laoreet urna in pretium rhoncus. Aliquam nec volutpat nisi.</p>
    </div>

        </div>
    </div>
)

export default Contact