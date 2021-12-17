import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';
import { useNotificationContext, types } from '../contexts/NotificationContext';

import { Form, Row, Button } from 'react-bootstrap';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password, rePassword } = Object.fromEntries(new FormData(e.currentTarget));

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            addNotification('E-mail адресът е невалиден', types.warning);
            return;
        }

        if (password.length < 5) {
            addNotification('Паролата трябва да е поне 5 символа', types.warning);
            return;
        }

        if (password != rePassword) {
            addNotification('Паролите не съвпадат', types.warning);
            return;
        }

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            })
            .catch(err => {
                addNotification('Неуспешена регистрация', types.error);
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
                        <Form.Control type="password" name="rePassword" id="repeat-pass" placeholder="Парола" />
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