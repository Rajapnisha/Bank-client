import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bankImage from "./images/deposit.jpg";

export default function Deposit() {
    let users = useContext(userContext);
    let n = users.users.length;
    let [bal, setBal] = useState(users.users[n - 1].amount);
    let [dep, setDep] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        let deposit = Number(dep);
        setBal(bal + deposit);
        users.users[n - 1].amount = bal + deposit;
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f8f9fa", padding: "80px" }}>
            {/* Left Side Image */}
            <div style={{ flex: 1, textAlign: "center", display: "left", justifyContent: "center" }}>
                <img src={bankImage} alt="Bank" style={{ width: "100vh", maxWidth: "4000px", height: "80vh", borderRadius: "10px" }} />
            </div>
            
            {/* Right Side Form */}
            <div style={{ flex: 1, padding: "30px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center", maxWidth: "400px" }}>
                <h1 style={{ marginBottom: "20px", color: "#343a40" }}><b>Deposit</b></h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" onChange={(e) => setDep(e.target.value)}
                        style={{ width: "100%", padding: "50px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" }}
                        placeholder="Enter deposit amount" required />
                    <Button type="submit"  style={{ width: "100%", backgroundColor: "#007bff", padding: "10px", border: "none", borderRadius: "5px", fontSize: "16px" }}>Submit</Button>
                </form>
                <h2 style={{ marginTop: "20px", color: "#343a40" }}>Balance: {bal}</h2>
            </div>
        </div>
    );
}
