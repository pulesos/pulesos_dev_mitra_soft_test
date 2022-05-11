import { Nav, Navbar, Image, Container, Offcanvas } from "react-bootstrap"
import {Link} from 'react-router-dom'
//@ts-ignore
import Avatar from '../../assets/images/avatar.jpg'

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand={false} >
                <Container fluid>
                    <Navbar.Brand>Галерея</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
                    </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div style={{ textAlign: 'center'}}>
                                <Nav>
                                    <Nav.Link><Link to='/' className="text-decoration-none">Галерея</Link></Nav.Link>
                                    <Nav.Link><Link to='/me' className="text-decoration-none">О себе</Link></Nav.Link>
                                </Nav>
                                    <Image
                                        roundedCircle
                                        width={100}
                                        height={100}
                                        src={Avatar} 
                                        style={{marginTop: '10px'}}/>
                                    <h4>Евгений Ключников</h4>
                                    <p>evgen7661@gmail.com</p>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;