import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as jokeService from '../../services/jokeService';
import { Form, Button } from 'react-bootstrap';

function AddJoke() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onAddJoke = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name') || "Анонимен";
        let text = formData.get('text');
        let ownerId = user._id;

        jokeService.create({
            name,
            text,
            ownerId
        }, user.accessToken)
            .then(result => {
                navigate('/');
            })
    }

    return (
        <section className="form-container" >
            <Form onSubmit={onAddJoke} method="POST">
                <br />
                <h2>Нов виц</h2>
                <br />
                <Form.Group className="mb-3 small-element">
                    <Form.Control type="text" name="name" id="name" placeholder="Име на потребител" />
                </Form.Group>        

                <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} name="text" id="text" placeholder="Веднъж зайчето ..." />
                </Form.Group>             

                <Button variant="success" type="submit">
                    Запиши
                </Button>
            </Form>
        </section>
    );
}

export default AddJoke;