import { useParams, useNavigate } from 'react-router-dom';
import { useState, useContext, Suspense } from 'react';

import { Card, Image, Row, Col, Button } from 'react-bootstrap';

import { AuthContext } from '../../contexts/AuthContext';
import useArticleState from '../../hooks/useArticleState';
import * as articleService from '../../services/articleService';

import ArticlePart from './ArticlePart'
import CategoryIcon from '../CategoryIcon';
import ConfirmDialog from '../Common/ConfirmDialog';
import ArticleComments from '../Comment/ArticleComments';

import './Article.css';
import { getColor } from '../util';
import ArticleLikesCount from '../Stats/ArticleLikesCount';

function Article() {
    const { articleId } = useParams();
    const [article, setArticle] = useArticleState(articleId);

    const [getComments, setGetComments] = useState(false);

    const commentShowHandler = (e) => {
        e.preventDefault();

        setGetComments(true);
    }

    const { user } = useContext(AuthContext);
    const owner = user._id == article.ownerId;

    const navigate = useNavigate();

    let category = article.category;
    let color = getColor(category);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const handleClose = () => setShowDeleteDialog(false);
    const handleShow = () => setShowDeleteDialog(true);

    const deleteHandler = (e) => {
        e.preventDefault();

        articleService.remove(articleId, user.accessToken)
            .then(() => {
                navigate('/articles');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={handleClose} onSave={deleteHandler} />
            <Suspense fallback={<p>Зареждане...</p>}>
            <Row className="justify-content-center" xs='auto'>
                <Col className='mt-10' >
                    <br />
                    <Card border={color} >
                        <Card.Header className={"bg-" + color + " text-white"}>
                            <Card.Title>
                                <CategoryIcon category={category} />
                                &nbsp;
                                {article.name}
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Image src={article.imageUrl ? `${article.imageUrl}` : "https://static.thenounproject.com/png/3674277-200.png"} className="article-img" style={{ width: '18rem' }} rounded fluid />
                            {article.maxAge?.length > 0
                                ? <ArticlePart part={"Максимална възраст"} headValue={article.maxAge} color={color} />
                                : null
                            }
                            {article.size?.length > 0
                                ? <ArticlePart part={"Размери"} text={article.size} color={color} />
                                : null
                            }
                            {article.description?.length > 0
                                ? <ArticlePart part={"Описание"} text={article.description} color={color} />
                                : null
                            }
                            {article.food?.length > 0
                                ? <ArticlePart part={"Хранене"} text={article.food} color={color} />
                                : null
                            }
                            {article.breeding?.length > 0
                                ? <ArticlePart part={"Отглеждане"} text={article.breeding} color={color} />
                                : null
                            }
                            {article.facts?.length > 0
                                ? <ArticlePart part={"Любопитни факти"} text={article.facts} color={color} />
                                : null
                            }
                        </Card.Body>
                    </Card>

                    {getComments
                        ? <ArticleComments articleId={articleId} color={color}/>
                        : null
                    }

                    <div className="article-down-buttons">
                        <ArticleLikesCount className="likes" articleId={articleId} />
                        <Button variant="primary-outline" href="#" onClick={commentShowHandler} className="text-secondary"><i class="far fa-comments"></i>Коментари ({article.count})</Button>
                        {owner
                            ? <>
                                <Button variant="primary-outline" href={`/article/${articleId}/comment`} className="text-primary"><i class="far fa-comment"></i>Добави коментар</Button>
                                <Button variant="primary-outline" href={`/article/${articleId}/edit`} className="text-secondary"><i class="fas fa-edit"></i>Редактиране</Button>
                                <Button variant="danger-outline" href="#" className="text-danger" onClick={handleShow}><i class="fas fa-trash-alt"></i>Изтриване</Button>
                            </>
                            : user.email != ""
                                ? <>
                                    <Button variant="primary-outline" href={`/article/${articleId}/like`} className="text-success"><i className="fas fa-thumbs-up"></i>Харесай</Button>
                                    <Button variant="primary-outline" href={`/article/${articleId}/comment`} className="text-primary"><i class="far fa-comment"></i>Добави коментар</Button>
                                </>
                                : null
                        }
                    </div>
                </Col>
            </Row>
            </Suspense >
        </>
    );
}

export default Article;