import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../styles/about.css'

const About =()=>{
    return(
        <div className="about">
            
            <Jumbotron id="about" >
                <h4>Hi, my name is</h4><br></br>
                <h1> Mritunjay Kumar Jha. </h1><br></br>
                <h2>I build things for web.</h2>
                <br></br>
                <Button id="btn" href="mailto:jhamrk@gmail.com">Contact</Button>

            </Jumbotron>

            



        </div>
    )

}
export default About;