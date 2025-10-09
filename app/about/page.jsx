import Button from "react-bootstrap/Button";
import Contador from "./client_component";

export default function Home() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <h1>Hola mundo!</h1>
      <Contador />
    </>
  );
}
