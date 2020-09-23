import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import '../styles/work.css'

const Work =()=>{
    return(
        <div id="work">
            <h4 id="head">Some things I've built</h4>
            <CardDeck id=" workcard">
                <Card id="cardlist">
                   
                    <Card.Body>
                        <Card.Title> <a href="//blooming-shelf-23659.herokuapp.com"><i class="fa fa-external-link" aria-hidden="true" > Backwaters</i></a> </Card.Title>
                        <Card.Text>An ecommerce FishStore for Aquascaping and buying related products  </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="cardlist">
                   
                    <Card.Body>
                        <Card.Title> <a href="BoxIT.com"><i class="fa fa-external-link" aria-hidden="true" > BoxIT</i></a></Card.Title>
                        <Card.Text>A subscription based platform for monthly grocery needs </Card.Text>
                    </Card.Body>
                </Card><Card id="cardlist">
                    <Card.Body>
                        <Card.Title><a href="RentFlux.com"><i class="fa fa-external-link" aria-hidden="true" > RentFlux</i></a></Card.Title>
                        <Card.Text>A subscription based platform for electronic gadgets  </Card.Text>
                    </Card.Body>
                </Card>
               

            </CardDeck>

        </div>
    )
}
export default Work