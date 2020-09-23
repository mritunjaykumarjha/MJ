import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../styles/intro.css'

const Intro =()=>{
    return(
    <div id="intro">
        <Jumbotron id="introtext">
            <h5>Background<span/></h5><br></br>
            <p id="ptext">Hello! I am frontend engineer currently looking for new opportunities.  </p>
            <p id="ptext">I enjoy creating beautiful responsive interfaces & experiences on web.<br></br> 
            Previously worked as an Remote Associate for 2 years & 3 months with <em>Amazon, Hyderabad,India</em> <br>
            </br>shortly after graduating with B.Tech in CSE from <em>Lovely professional university, Punjab, India 2017</em></p>
            <p id="ptext">Here are a few technologies I've been working recently:</p>
            <ul id="introlist">
                <li >JavaScript (ES6+)</li>
                <li> React</li>
                <li>Node.js</li>
                <li>Html & CSS</li>

            </ul>


        </Jumbotron>

    </div>
    )
}

export default Intro