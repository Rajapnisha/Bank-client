import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
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
    <div style={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: "20px" }}>
      
      {/* Register Form */}
      <div style={{ 
        width: "90%", maxWidth: "400px", 
        margin: "auto", padding: "50px", 
        borderRadius: "10px", background: "white", 
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
        textAlign: "left" }}>
        <h1 style={{ marginBottom: "20px", color: "#343a40" ,textAlign:"center"}}><b>Register</b></h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Name:</label>
            <input type="text" name="name" placeholder="Enter your name..." required onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>E-mail:</label>
            <input type="email" name="email" placeholder="Enter your email..." required onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>Password:</label>
            <input type="password" name="password" placeholder="Enter your password..." required onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <Button type="submit" style={{ width: "100%", backgroundColor: "#28a745", padding: "10px", border: "none", borderRadius: "5px", fontSize: "16px" }}>Submit</Button>
        </form>
      </div>
    </div>
  );
}
