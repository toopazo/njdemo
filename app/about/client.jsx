"use client";

import { useState } from "react";

import Image from "next/image";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="dark:invert"
          src="/globe.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default function Contador() {
  const [count, setCount] = useState(10);
  function addCount() {
    setCount(count + 1);
  }
  function subtractCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <Button onClick={addCount}> Sumar </Button>
      <h1>El contador es {count}</h1>
      <Button onClick={subtractCount}> Restar </Button>
    </div>
  );
}

function NavBarComp() {
  return (
    <>
      {/* <h1>Soy el componente NavBar</h1> */}
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function CardComp(props) {
  const id = props.id;
  const iid = 10 + id;
  const isrc = "https://picsum.photos/id/" + iid + "/200/200";
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={isrc} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

function Product(props) {
  const prodid = props.prodid;
  return (
    <>
      <h3>Producto {prodid} </h3>
      <CardComp id={prodid} />
    </>
  );
}

function Products(props) {
  const num_prods = props.num;

  // Para cada producto, crear un componente Product que reciba el id del producto
  // y retorne un tag html
  const complist = [];
  for (let i = 1; i <= num_prods; i++) {
    complist.push(
      <Col key={i}>
        <Product key={i} prodid={i} />
      </Col>
    );
  }

  let content;
  if (num_prods == 0) {
    content = (
      <div className="d-flex justify-content-center align-items-center">
        <h1>No hay productos para mostrar</h1>
      </div>
    );
  } else {
    content = <Row>{complist}</Row>;
  }
  // return <div>{content}</div>;

  return <Container>{content}</Container>;
}

export { NavBarComp, Products, ControlledCarousel };
