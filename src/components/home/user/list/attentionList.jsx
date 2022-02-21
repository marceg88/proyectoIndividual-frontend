import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


export const PendingAttention = ( service, date) => {
    const navigate = useNavigate();
    return(
        <Card>
            <Card.Header as="h5">SUS CITAS PENDIENTES</Card.Header>
            <Card.Body>
                <Card.Title>{service}</Card.Title>
                <Card.Text>
                    Su cita esta programada para el {date}, recuerde estar 15 minutos antes.
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/user/:id')}>Modificar o eliminar</Button>
            </Card.Body>
        </Card>
    )
}