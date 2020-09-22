import React from 'react'
import '../styles/exp.css'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'

const Experience =()=>{
    return(
        <div id="experience">
            <Jumbotron id="exp">
                <h4 id="head">Where I've Worked</h4><br></br>
                <ol id="list">
                <li><h6>Freelance Web Developer, Hyderabad</h6>
                <p id="duration"> Jan 2020 - Present</p></li><br></br>
                    <li><h6>Remote Associate <br></br>@Amazon Development Centre India Pvt Ltd, Hyderabad</h6>
                <p id="duration"> Sept 2017 - Jan 2020</p></li>
                </ol>  

            </Jumbotron>
            
        </div>
    )
}
export default Experience