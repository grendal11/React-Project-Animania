import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import * as authService from '../services/authService';

import { Form, Button, Row } from 'react-bootstrap';

const Login = () => {

const {login} = useContext(AuthContext);
const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/articles');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }

    return (
        <Row className="justify-content-center" xs='auto'>
            <Form onSubmit={onLoginHandler} method="POST">
                <br />
                <h2>Вход в системата</h2>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Е-мейл адрес</Form.Label>
                    <Form.Control type="email" name="email" id="email" placeholder="Въведи е-мейл" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control type="password" name="password" id="password" placeholder="Парола" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Вход
                </Button>
            </Form>
        </Row>
    );
};

export default Login;