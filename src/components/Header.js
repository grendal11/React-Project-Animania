import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Sitelogo from './Sitelogo/Sitelogo';

function Header() {
    const { user } = useContext(AuthContext);

    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Sitelogo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#home">Обяви</Nav.Link> */}
                        <Nav.Link href="/articles">Статии</Nav.Link>
                        <Nav.Link href="/jokes">Вицове</Nav.Link>
                        {user.email != ""
                            ? <>
                                <NavDropdown title="Добави" id="basic-nav-dropdown">
                                    {/* <NavDropdown.Item href="#action/3.1">Обява</NavDropdown.Item> */}
                                    <NavDropdown.Item href="/article/create">Статия</NavDropdown.Item>
                                    <NavDropdown.Item href="/joke/create">Виц</NavDropdown.Item>
                                </NavDropdown>
                            </>
                            : null
                        }
                    </Nav>
                    <Nav className="justify-content-end">
                        {user.email != ""
                            ? <>
                                <Nav.Link>{user.email}</Nav.Link>
                                <Nav.Link href="/logout">Изход</Nav.Link>
                            </>
                            : <>
                                <Nav.Link href="/login">Вход</Nav.Link>
                                <Nav.Link href="/register">Регистрация</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;