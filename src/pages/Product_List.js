import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { Button, Breadcrumb } from "react-bootstrap";
import starryNight from "../assets/starryNight.jpg";
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";

const styles = {
  cardGroup: {
    margin: "1rem",
  },
  card: {
    borderRadius: 10,
    padding: "5px",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 0,
    height: "80%",
    width: "auto",
    padding: "5px",
  },
  breadCrumb: {},
  button: {},
};

export const Product_List = () => (
  <div class="product_list container">
    <Breadcrumb className="">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    <div class="container">
      <CardGroup className="mb-4">
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image1} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$20000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image3} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$150.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="mb-4">
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image1} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$20000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image3} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$150.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className="mb-4">
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image1} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$20000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={image3} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>ABC</Card.Text>
            <Card.Title>C$150.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="m-2" style={styles.card}>
          <Card.Img variant="top" src={starryNight} style={styles.cardImage} />
          <Card.Body>
            <Card.Text>Starry Night painting</Card.Text>
            <Card.Title>C$30000.00</Card.Title>
          </Card.Body>
          <div className="mb-2">
            <Button variant="success" size="sm">
              Place Bid
            </Button>{" "}
            <Button variant="warning" size="sm">
              Buy Now
            </Button>
          </div>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  </div>
);
