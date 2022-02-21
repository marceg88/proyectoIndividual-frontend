import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {tokenActivateUser} = useParams()

    const handleSubmit = () => {
        
    }

    return (
        <Container align="center" className="mt-5 justify-content-start" >
            <Col lg={3}>
                <Form className='text-start'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{margin: 0}}>Ingrese su email</Form.Label>
                        <Form.Control type="email" placeholder="example@test.com" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label style={{margin: 0}}>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group className="mb-5 mt-0" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Acepta terminos y condiciones" style={{fontSize: "0.8rem"}} />
                    </Form.Group>
                    <div className="mb-3 d-grid gap-2">
                        <Button variant="primary"  type="submit" onClick={() => navigate("/user/*")}>
                            Iniciar sesion
                        </Button>
                    </div>
                </Form>
                    <h6 className="mb-0">¿Aún no tienes cuenta?</h6>
                    <Link className="mt-0" to="/register">Crear una cuenta</Link>
            </Col>  
        </Container>  
    )
}