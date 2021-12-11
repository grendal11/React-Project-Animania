import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ArticlePart from './ArticlePart'
import CategoryIcon from '../CategoryIcon';
import './Article.css';

function Article() {
    const { articleId } = useParams();

    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/articles/${articleId}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setArticle(res);
            });
    }, []);

    console.log(articleId);

    let category = article.category;
    let color = "success";
    switch (category) {
        case 'water':
        case 'birds':
            color = "primary";
            break;

        case 'reptiles':
        case 'rodents':
            color = "secondary";
            break;

        case 'others':
            color = "danger";
            break;
    }

    let demoText = "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.";

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
                        <ArticlePart part={"Максимална възраст"} headValue={article.maxAge} color={color} />
                        <ArticlePart part={"Размери"} text={article.size} color={color} />
                        <ArticlePart part={"Описание"} text={article.text} color={color} />
                        <ArticlePart part={"Хранене"} text={article.food} color={color} />
                        {article.canBreed
                            ? <ArticlePart part={"Отглеждане"} text={article.breeding} color={color} />
                            : null
                        }
                        <ArticlePart part={"Любопитни факти"} text={article.facts} color={color} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Article;