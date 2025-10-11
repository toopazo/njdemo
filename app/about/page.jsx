import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";

import Contador from "./client";
import { NavBarComp, Products, ControlledCarousel } from "./client";

export default function Home() {
  return (
    <>
      <NavBarComp />
      <div className="d-flex justify-content-center align-items-center">
        <Badge bg="secondary" style={{ margin: "15px" }}>
          <Button variant="primary">Primary</Button>
          <h1>Hola mundo!</h1>
          <Contador />
        </Badge>
      </div>
      <ControlledCarousel />
      <Products num="6" />
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <>
      {/* <h1>Soy el componente Footer</h1>; */}
      {/* <Stack direction="horizontal" gap={2}> */}
      <div className="d-flex justify-content-center align-items-center">
        <Badge bg="secondary" style={{ margin: "15px" }}>
          <Button as="a" variant="primary">
            About us
          </Button>
          <Button as="a" variant="success">
            Contact us
          </Button>
        </Badge>
      </div>
      {/* </Stack> */};
    </>
  );
}
