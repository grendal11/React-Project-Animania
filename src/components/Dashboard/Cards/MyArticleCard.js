import { Card, Button, Image } from 'react-bootstrap';
import CategoryIcon from '../../CategoryIcon';
import '../Dashboard.css';

function MyArticleCard(props) {
    let category = props.category;


    return (
        <Card border="secondary" className="dashboard-my-article-card">
            <Card.Header className="bg-outline-secondary text-dark text-bold">
                <CategoryIcon category={category} />
                &nbsp;
                {props.name} ({props.category})
                <div className="article-stats">
                    <span variant="success-outline" className="text-danger"><i className="fas fa-thumbs-up"></i> 23</span>
                    <Button variant="success-outline" className="text-success"><i class="far fa-comments"></i> 23</Button>
                </div>
                <div className="article-card-buttons">
                    <Button variant="danger-outline" href={`/article/${props._id}/delete`} className="text-danger"><i class="fas fa-trash-alt"></i></Button>
                    <Button variant="primary-outline" href={`/article/${props._id}/edit`} className="text-success"><i class="fas fa-edit"></i></Button>
                    <Button variant="primary-outline" href={`/article/${props._id}`} className="text-primary"><i class="fas fa-eye"></i></Button>
                </div>
            </Card.Header>
        </Card>
    );
}

export default MyArticleCard;