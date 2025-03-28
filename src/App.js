import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Register from './register.js';
import Deposit from './deposit.js';
import Cashback from './cashback.js';
import Alldata from './alldata.js';
import UserContext from './context.js';

function App() {
  return (
    <>
      <Navbar bg="info" data-bs-theme="info">
        <Container fluid>
          <Navbar.Brand href="#">WWB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
              <Nav.Link href="#deposit">Deposit</Nav.Link>
              <Nav.Link href="#cashback">Cashback</Nav.Link>
              <Nav.Link href="#alldata">Alldata</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <HashRouter>
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'Nisha',
                email: 'nisha@gmail.com',
                password: 'nisha1821',
                amount: 1000,
              },
            ],
          }}
        >
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/cashback' element={<Cashback />} />
            <Route path='/alldata' element={<Alldata />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
