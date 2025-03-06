import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Register() {
  let users = useContext(userContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let item = { name: name, email: email, password: password, amount: 1000 };
    console.log(item);
    axios.post("https://bank-server-01u1.onrender.com/create", item);
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <Card className="shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4 text-dark fw-bold">Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name..." required onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">E-mail:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email..." required onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter your password..." required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button type="submit" className="w-100 btn-success">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
