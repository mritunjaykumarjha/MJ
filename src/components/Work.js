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
                        <Card.Title> <i class="fa fa-external-link" aria-hidden="true"><a href="backwaters.com"></a> Backwaters</i></Card.Title>
                        <Card.Text>An ecommerce FishStore for Aquascaping and buying related products  </Card.Text>
                    </Card.Body>
                </Card>
                <Card id="cardlist">
                   
                    <Card.Body>
                        <Card.Title> <i class="fa fa-external-link" aria-hidden="true"> <a href="boxit.com"> </a> BoxIT</i></Card.Title>
                        <Card.Text>A subscription based platform for monthly grocery needs </Card.Text>
                    </Card.Body>
                </Card><Card id="cardlist">
                    <Card.Body>
                        <Card.Title><i class="fa fa-external-link" aria-hidden="true"><a href ="rentflux.com"></a> Rentflux </i></Card.Title>
                        <Card.Text>A subscription based platform for electronic gadgets  </Card.Text>
                    </Card.Body>
                </Card>
               

            </CardDeck>

        </div>
    )
}
export default Work