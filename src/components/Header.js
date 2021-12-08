import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Sitelogo from './Sitelogo';

function Header() {
    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Sitelogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Обяви</Nav.Link>
                        <Nav.Link href="#link1">Статии</Nav.Link>
                        <Nav.Link href="#link2">Вицове</Nav.Link>
                        <NavDropdown title="Добави" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Обява</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Статия</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Виц</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home">Вход</Nav.Link>
                        <Nav.Link href="#link1">Регистрация</Nav.Link>
                        <Nav.Link href="#link2">Изход</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;