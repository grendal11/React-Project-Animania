import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthContext';
import * as articleService from '../../../services/articleService';
import CategoryIcon from '../../CategoryIcon';
import '../Dashboard.css';

function MyArticleCard(props) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    let category = props.category;

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const handleClose = () => setShowDeleteDialog(false);
    const handleShow = () => setShowDeleteDialog(true);

    const deleteHandler = (e) => {
        e.preventDefault();

        articleService.remove(props._id, user.accessToken)
            .then(() => {
                navigate('/articles');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };


    return (
        <>
            <Modal show={showDeleteDialog} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Сигурни ли сте, че искате да изтриете статията?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteHandler}>
                        Изтриване
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Отказ
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card border="secondary" className="dashboard-my-article-card">
                <Card.Header className="bg-outline-secondary text-dark text-bold">
                    <CategoryIcon category={category} />
                    &nbsp;
                    {props.name} ({props.category})
                    <div className="article-stats">
                        <span variant="success-outline" className="text-danger"><i className="fas fa-thumbs-up"></i> 23</span>
                        &nbsp;
                        <span variant="success-outline" className="text-success"><i class="far fa-comments"></i> 23</span>
                    </div>
                    <div className="article-card-buttons">
                        <Button variant="danger-outline" href="#" className="text-danger" onClick={handleShow}><i class="fas fa-trash-alt"></i></Button>
                        <Button variant="primary-outline" href={`/article/${props._id}/edit`} className="text-success"><i class="fas fa-edit"></i></Button>
                        <Button variant="primary-outline" href={`/article/${props._id}`} className="text-primary"><i class="fas fa-eye"></i></Button>
                    </div>
                </Card.Header>
            </Card>
        </>
    );
}

export default MyArticleCard;