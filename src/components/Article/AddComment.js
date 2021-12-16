import { useNavigate, useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as commentService from '../../services/commentService';
import { Form, Button } from 'react-bootstrap';

function AddComment() {
    const { articleId } = useParams();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onAddComment = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name') || "Анонимен";
        let comment = formData.get('comment');
        let ownerId = user._id;

        commentService.create({
            name,
            comment,
            articleId,
            ownerId
        }, user.accessToken)
            .then(result => {
                navigate(`/article/${articleId}`);
            })
    }

    return (
        <section className="form-container" >
            <Form onSubmit={onAddComment} method="POST">
                <br />
                <h2>Нов коментар</h2>
                <br />
                <Form.Group className="mb-3">
                    {/* <Form.Label>Име на потребител</Form.Label> */}
                    <Form.Control type="text" name="name" id="name" placeholder="Име на потребител" />
                </Form.Group>              

                <Form.Group className="mb-3">
                    {/* <Form.Label>Описание</Form.Label> */}
                    <Form.Control as="textarea" rows={3} name="comment" id="comment" placeholder="Коментар ..." />
                </Form.Group>          

                <Button variant="success" type="submit">
                    Запиши
                </Button>
            </Form>
        </section>
    );
}

export default AddComment;