import React from 'react'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'
import '../styles/skills.css'

const Skills=()=>{
    return(
        <div id="skill">
            <Jumbotron id="content">
             <h4 id="head">Skills</h4><br></br>
             <div className="col-container">
                 <div className="col">
                     <h6>Programming Languages</h6>
                 <ul>
                
                 <li>HTML</li>
                 <li>S(CSS)</li>
                 <li>Javascript</li>
                 <li>Java</li>
             </ul>
             
                 </div>
                  <div className="col">
                     <h6>Libraries & Frameworks</h6>
                 <ul>
                 <li>React</li>
                 <li>Node.js</li>
                 <li>Express</li>
                 <li>MongoDB</li>
                 <li>React-Bootstrap</li>
                 <li>Material-UI</li>
             </ul>
                 </div>
                 <div className="col">
                     <h6>Tools & Platform</h6>
                 <ul>
                 <li>Git/Github</li>
                 <li>VS Code</li>
                 <li>Tableau</li>
                 
             </ul>
                 </div>
             </div>
             
            </Jumbotron>
        </div>
    )
}

export default Skills