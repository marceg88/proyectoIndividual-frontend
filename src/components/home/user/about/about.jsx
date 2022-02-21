import { Container, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutUser = (user) => {
    const {full_name} = user
    return(
        <Container>
            <Card
                bg={secondary}
                text="white"
                style={{ width: '18rem' }}
                className="mb-2"
            >
                <Card.Header>Bienvenido a su Clinica Vida Sana</Card.Header>
                <Card.Body>
                    <Card.Title>{ full_name }</Card.Title>
                    <Card.Text>
                        Es un placer para nosotros servirle.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}