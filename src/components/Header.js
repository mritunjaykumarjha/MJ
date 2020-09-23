import React from 'react'
import '../styles/header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavLink as li} from 'react-bootstrap/NavLink'

const Header=()=>{
    return(
        <div>

            <Navbar className="navbar"  collapseOnSelect expand="lg">
                <Navbar.Brand href="/" >
                    <img src= "logo.png" alt="logo"  /> 
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggler" aria-controls="navlinks" aria-hidden="true" />
                    
                    <Navbar.Collapse id="navlinks">
                        <Nav as="ol" className="ml-auto">
                        
                        <li id="links"><a  href="#intro">About</a></li>
                            
                            
                            <li id="links"><a href="#experience">Experience</a></li>
                        
                            <li id="links"><a href="#skill">Skills</a></li>
                            <li id="links"><a href="#work">Work</a></li>
                        
                        
                            

                            <li id="links"><a href="//drive.google.com/file/d/1EkxwPD3LC3I9DQVVjfRKM3rF-uSonM3B/view?usp=sharing" style={{border:"2px",borderStyle:"solid",padding:"10px",borderColor:"turquoise",borderRadius:"10px"}}>Resume</a></li>


             
                        </Nav>
                    </Navbar.Collapse>

            </Navbar>

            
        </div>
    )
}
export default Header



/**
 *  <ol className="ml-auto">
                                <li><a className="" href="">About</a></li>
                            
                            
                                <li><a href="">Experience</a></li>
                            
                            
                                <li><a href="">Work</a></li>
                            
                            
                                <li><a href="">Contact</a></li>
                            </ol>
 */


 /**
  *  <Nav.Link as="li"  href="#"> About</Nav.Link>
                           <Nav.Link as="li"  href="#"> Experience</Nav.Link>
                           <Nav.Link as="li" href="#">Work </Nav.Link>
                           <Nav.Link as="li" href="#"> Contact</Nav.Link>
  */