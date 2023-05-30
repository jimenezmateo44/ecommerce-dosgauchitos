import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../assets/logo.png";
import '../assets/styles/header_style.css';


const Header = () => {
  return (
    <header>
        <Navbar className="navbar" expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="DosGauchitos" className="navbar-logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart" className="navbar-item"><FaShoppingCart/> Carrito</Nav.Link>
                        <Nav.Link href="/login" className="navbar-item"><FaUser/> Ingresa</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header