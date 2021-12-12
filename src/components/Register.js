import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';

import {Form, Row, Button} from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)   
            .then(authData => {
                login(authData);
                
                navigate('/');
            });
    }
    
    return (
        <>
    <Row className="justify-content-center" xs='auto'>
            <Form onSubmit={registerSubmitHandler} method="POST">
                <br />
                <h2>Регистрация на нов потребител</h2>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Е-мейл адрес</Form.Label>
                    <Form.Control type="email" name="email" id="email" placeholder="Въведи е-мейл" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control type="password" name="password" id="password" placeholder="Парола" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Повтори парола</Form.Label>
                    <Form.Control type="password" name="confirm-pass" id="repeat-pass" placeholder="Парола" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Регистрация
                </Button>
            </Form>
        </Row>

       
        </>
    );
}

export default Register;