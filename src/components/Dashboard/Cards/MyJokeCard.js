import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthContext';
import * as jokeService from '../../../services/jokeService';
import ConfirmDialog from '../../Common/ConfirmDialog';
import CommentsCount from '../../Stats/CommentsCount';
import '../Dashboard.css';

function MyJokeCard(props) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const handleClose = () => setShowDeleteDialog(false);
    const handleShow = () => setShowDeleteDialog(true);

    const deleteHandler = (e) => {
        e.preventDefault();

        jokeService.remove(props._id, user.accessToken)
            .then(() => {
                navigate('/');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };


    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={handleClose} onSave={deleteHandler} />
            <Card border="secondary" className="dashboard-my-article-card">
                <Card.Header className="bg-outline-secondary text-dark text-bold">
                    {props.text.substring(0, 50) + "..."}
                    <div className="article-stats">
                        <span variant="success-outline" className="text-success"><i className="fas fa-thumbs-up"></i> 23</span>
                        &nbsp; &nbsp;
                        <span variant="success-outline" className="text-warning"><i class="far fa-laugh"></i> 23</span>
                        &nbsp; &nbsp;
                        <span variant="success-outline" className="text-danger"><i className="fas fa-thumbs-down"></i> 23</span>
                    </div>
                    <div className="article-card-buttons">
                        <Button variant="danger-outline" href={`/joke/${props._id}/delete/`} className="text-danger"><i class="fas fa-trash-alt"></i></Button>
                    </div>
                </Card.Header>
            </Card>
        </>
    );
}

export default MyJokeCard;