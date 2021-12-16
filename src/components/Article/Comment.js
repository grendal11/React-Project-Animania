import { Card, Button, Image } from 'react-bootstrap';
import CategoryIcon from '../../CategoryIcon';
import '../Dashboard.css';

function Comment(props) {

    return (
        <Card className="dashoard-article-card" border="secondary">
            <Card.Header className="bg-secondary text-white text-bold">
                {/* {props.name} */} Анонимен
            </Card.Header>
            <Card.Body>
                <Card.Title>Категория: </Card.Title>
                <Card.Text>
                    текста
                </Card.Text>
               <Button variant="secondary" size="sm" href={`/article/${props._id}`}>Виж повече</Button>
               
            </Card.Body>
        </Card>
    );
}

export default Comment;