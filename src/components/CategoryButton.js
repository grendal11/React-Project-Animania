import CategoryIcon from './CategoryIcon';
import { Button, Card } from 'react-bootstrap';
import { getColor } from './util';

export default function CategoryButton(props) {
    let category = props.category;
    let color = getColor(category);

    return (
        <Card style={{ width: '18rem' }}>
            <Button href={`/article/${props.id}`} id={props.id} variant={`outline-${color}`}>
                <CategoryIcon category={category} />
                &nbsp;
                {props.name}
            </Button>
        </Card>
    );
}