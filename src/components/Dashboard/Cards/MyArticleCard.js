import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthContext';
import * as articleService from '../../../services/articleService';
import CategoryIcon from '../../CategoryIcon';
import ConfirmDialog from '../../Common/ConfirmDialog';
import CommentsCount from '../../Stats/CommentsCount';
import ArticleLikesCountShort from '../../Stats/ArticleLikesCountShort';
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
                navigate('/home');
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
                    <CategoryIcon category={category} />
                    &nbsp;
                    {props.name} ({props.category})
                    <div className="article-stats">
                        <ArticleLikesCountShort articleId={props._id} />
                        &nbsp;
                        <CommentsCount articleId={props._id}/>
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