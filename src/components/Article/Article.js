import { Card, Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ArticlePart from './ArticlePart'
import CategoryIcon from '../CategoryIcon';
import './Article.css';

function Article() {

    let category = "success";
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
                <br/>
                <Card border={color} >
                    <Card.Header className={"bg-" + color + " text-white"}>
                        <Card.Title>
                            <CategoryIcon category={category}/>
                            &nbsp;
                            Лисица
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Image src="https://miau.bg/files/lib/600x350/fox3.jpg" className="article-img" style={{ width: '18rem' }} rounded fluid />
                        <ArticlePart part={"Максимална възраст"} headValue={"12-14 години"} color={color}/>
                        <ArticlePart part={"Размери"} text={demoText} color={color} />
                        <ArticlePart part={"Описание"} text={demoText} color={color} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Article;