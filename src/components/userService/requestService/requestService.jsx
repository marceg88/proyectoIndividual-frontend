import { Form, Col, Container, Button } from "react-bootstrap"

export const AppointmentServices = () => {

    const handleSubmit = () => {
        
    }

    return (
        <Container align="center" className="mt-5 justify-content-start" >
            <Col lg={3}>
                <Form className='text-start'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{margin: 0}}>Seleccione el servicio</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Escoja una opción</option>
                            <option value="1">Médicina general</option>
                            <option value="2">Toma de muestras</option>
                            <option value="3">Urgencias</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label style={{margin: 0}}>Seleccione la fecha</Form.Label>
                        <Form.Control type="date"  />
                    </Form.Group>
                    <div className="mb-3 d-grid gap-2">
                        <Button variant="primary"  type="submit" >
                            AGENDAR
                        </Button>
                    </div>
                </Form>
            </Col>  
        </Container>
    )
}