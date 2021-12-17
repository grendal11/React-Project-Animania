import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as commentService from '../../services/commentService';

import { Card, Button } from 'react-bootstrap';


function Comment({ comment, color }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const deleteHandler = (e) => {
        e.preventDefault();

        commentService.remove(comment._id, user.accessToken)
            .then(() => {
                let path = `/article/${comment.articleId}`;
                navigate(`/article/${comment.articleId}`);
            });
     };

    return (
        <Card className={"comment-card border-" + color} >
            <Card.Header className="text-black text-bold">
                {comment.name}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {comment.comment}
                    {comment.ownerId == user?._id
                        ? <Button variant="danger-outline" size="sm" href={`/article/${comment.articleId}/delete/${comment._id}`} className="text-danger button-right"><i class="fas fa-times"></i> &nbsp; Изтрий</Button>
                        : null}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Comment;