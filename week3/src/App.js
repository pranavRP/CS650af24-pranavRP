import logo from './logo.svg';
import './App.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Intro from './component/intro';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to={'/intro'}>Intro</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>  
      <Routes>
        <Route path={'/'} element={<p>Welcome Page</p>}></Route>
        <Route path={'Intro'} element={<Intro />}></Route>
      </Routes>    
    </div>
  );
}

export default App;
