import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from '../Pages/Contact';

import logo from '../assets/logo.jpg';

import { Routes ,Route, Link,NavLink, BrowserRouter} from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product'


function Navbar1() {
  return (
    
<>
    <Navbar expand="lg">
      <Container fluid className='space'>
     <img src={logo} alt="logo" style={{height: "114px",}} />
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            
            <Nav.Link href="/contact" >
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Routes>
<Route path='/'element={<Home />}/>
<Route path='/product'element={<Product />}/>
<Route path='/contact'element={<Contact />}/>
{/* <Route path='/contact'element={<Contact />}/> */}
</Routes>
</>
  );
}

export default Navbar1;