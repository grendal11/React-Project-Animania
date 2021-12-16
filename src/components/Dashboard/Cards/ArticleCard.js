import { Card, Button, Image } from 'react-bootstrap';
import CategoryIcon from '../../CategoryIcon';
import '../Dashboard.css';

function ArticleCard(props) {
    let category = props.category;


    return (
        <Card className="dashoard-article-card" border="secondary">
            <Card.Header className="bg-secondary text-white text-bold">
                <CategoryIcon category={category}/>
                &nbsp;
                {props.name}
            </Card.Header>
            <Card.Body>
                <Image src={props.imageUrl} fluid className="small-image" />
                <Card.Title>Категория: {props.category}</Card.Title>
                <Card.Text>
                    {props.description.substring(1, 180) + "..."}
                </Card.Text>
                <Button variant="secondary" size="sm" href={`/article/${props._id}`} className="article-card-button">Виж повече</Button>
            </Card.Body>
        </Card>
    );
}

export default ArticleCard;