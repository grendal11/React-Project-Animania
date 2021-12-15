import { useParams } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import useArticleState from '../../hooks/useArticleState';

import ArticlePart from './ArticlePart'
import CategoryIcon from '../CategoryIcon';

import './Article.css';
import { getColor } from '../util';

function Article() {
    const { articleId } = useParams();
    const [article, setArticle] = useArticleState(articleId);

    let category = article.category;
    let color = getColor(category);

    return (
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
                        <Image src={`${article.imageUrl}`} className="article-img" style={{ width: '18rem' }} rounded fluid />
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
            </Col>
        </Row>
    );
}

export default Article;