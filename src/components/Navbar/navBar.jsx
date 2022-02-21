import { useNavigate } from 'react-router-dom';
import {Navbar, Nav, Image, Col, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    const navigate = useNavigate();
    
    return (
        <Navbar bg="primary" >
                    <Col sm={4}>
                        <Image style={{width: 40, height: 40}} src="https://i.pinimg.com/564x/bb/b8/d6/bbb8d65192521009d5f90ce8fd060b1d.jpg" ></Image>
                    </Col>
                    <Col sm={4}>
                        <Nav className="justify-content-between">
                            <Nav.Link href="/" style={{color: "white"}}>INICIO</Nav.Link>
                            <Nav.Link href="/notices" style={{color: "white"}}>NOTICIAS</Nav.Link>
                            <Nav.Link href="/services" style={{color: "white"}}>SERVICIOS</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={4} >
                        <Button style={{backgroundColor: "#0033A0"}} onClick={() => navigate('/login')}>INGRESAR</Button>
                    </Col>        
        </Navbar>
    )
}