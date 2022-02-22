import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import starryNight from '../assets/starryNight.jpg';
import image1 from '../assets/image1.jpg';
import image3 from '../assets/image3.jpg';

const styles = {
  cardGroup: {
    margin: '1rem'
  },
  card: {
    borderRadius: 10
  },
  cardImage: {
    objectFit: 'cover',
    width: '25vw',
    height: '35vh',
    borderRadius: 0
  },
  button: {

  }
}

export const Product_List = () => (
  <>
    <CardGroup className='mt-4' >
      <Card style={styles.card}>
        <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
        <Card.Body>
          <Card.Text>Starry Night painting</Card.Text>
          <Card.Title>C$30000.00</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image1} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$20000.00</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image3} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$150.00</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className='mt-4' >
      <Card style={styles.card}>
        <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$220.00</Card.Title>

        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image1} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$254.00</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image3} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$15</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className='mt-4' >
      <Card style={styles.card}>
        <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$22</Card.Title>

        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image1} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$20</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image3} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$15</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <CardGroup className='mt-4' >
      <Card style={styles.card}>
        <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$22</Card.Title>

        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image1} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$20</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image3} style={styles.cardImage} />
        <Card.Body>
          <Card.Title>C$15</Card.Title>


        </Card.Body>
        <div className="mb-2">
          <Button variant="success" size="sm">Place Bid</Button>{' '}
          <Button variant="warning" size="sm">Buy Now</Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

  </>
)