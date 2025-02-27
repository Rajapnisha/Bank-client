import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cashbackImage from "./images/cashback.jpg";

export default function Cashback() {
    let users = useContext(userContext);
    let n = users.users.length;
    let [Balance, setBalance] = useState(users.users[n - 1].amount);
    let [cashback, setCashback] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        let cash = Number(cashback);
        setBalance(Balance - cash);
        users.users[n - 1].amount = Balance - cash;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f8f9fa", padding: "100px" }}>
            {/* Cashback Image */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <img src={cashbackImage} alt="Cashback" style={{ width: "70vh", maxWidth: "3000px", height: "20vh", borderRadius: "10px" }} />
            </div>
            
            {/* Cashback Form */}
            <div style={{ width: "90%", maxWidth: "400px", padding: "30px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                <h1 style={{ marginBottom: "20px", color: "#343a40" }}><b>Cashback</b></h1>
                <form onSubmit={handleSubmit}>
                    <input type="number" onChange={(e) => setCashback(e.target.value)}
                        style={{ width: "100%", padding: "30px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" }}
                        placeholder="Enter cashback amount" required />
                    <Button type="submit" style={{ width: "100%", backgroundColor: "#28a745", padding: "10px", border: "none", borderRadius: "5px", fontSize: "16px" }}>Submit</Button>
                </form>
                <h2 style={{ marginTop: "20px", color: "#343a40" }}>Balance: {Balance}</h2>
            </div>
        </div>
    );
}
