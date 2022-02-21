import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Col, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUserMethodsMessage, selectSignUpState, signUp } from '../../store/userSlice/userSlice';



export function FormRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, message, status } = useSelector(selectSignUpState);
    

    /* FORM VALIDATIONS */
    const handleSubmit = (e, values) => {
            e.preventDefault()
            const data = values;
            console.log(values)
            dispatch(signUp(data));
    };

    useEffect(() => {
        if (status === 'OK') {
            setTimeout(() => {
                dispatch(resetUserMethodsMessage('signUpState'));
                navigate('/login');
            }, 3500)
        }
    }, [dispatch, status, navigate]);
    
   
    
    return (
        <Container align="center" className="mt-5 justify-content-start">
            <Col lg={4}>
                <Form className='text-start'
                    
                    onSubmit={(values) => console.log(values)}
                >
                    <Form.Group className="mb-3" >
                        <Form.Label style={{margin: 0}}>Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese nombre" name="full_name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{margin: 0}}>Ingrese direccion</Form.Label>
                        <Form.Control type="address" placeholder="cra xx" name="address"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{margin: 0}}>Ingrese email</Form.Label>
                        <Form.Control type="email" placeholder="example@test.com" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{margin: 0}}>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="contraseña" name="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label style={{margin: 0}}>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" placeholder="confirme contraseña" name="confirm_password"/>
                    </Form.Group>
                    <Button type="submit" >
                            Registrar
                    </Button>
                </Form>
            </Col>           
        </Container>      
    )
}