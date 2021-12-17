import { useNavigate, useParams } from 'react-router-dom';
import {  useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as commentService from '../../services/commentService';
import { Form, Button } from 'react-bootstrap';

function AddComment() {
    const { articleId } = useParams();

    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    const navigate = useNavigate();

    const onAddComment = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get('name') || "Анонимен";
        let comment = formData.get('comment');
        let ownerId = user._id;

        if (comment.length < 1) {
           
            addNotification('Не сте въвели коментар', types.warning);
            return;
        }

        commentService.create({
            name,
            comment,
            articleId,
            ownerId
        }, user.accessToken)
            .then(result => {
                navigate(`/article/${articleId}`);
            })
            .catch(err => {
                addNotification('Възникна проблем при добавянето накоментара', types.error);
            });
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