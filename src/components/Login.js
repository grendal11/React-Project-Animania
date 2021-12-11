import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Login = () => {
    return (
        <Row className="justify-content-center" xs='auto'>
            <Form>
            <br />
            <h2>Вход в системата</h2>
            <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Е-мейл адрес</Form.Label>
                    <Form.Control type="email" placeholder="Въведи е-мейл" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control type="password" placeholder="Парола" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Вход
                </Button>
            </Form>
        </Row>
    );
};

export default Login;