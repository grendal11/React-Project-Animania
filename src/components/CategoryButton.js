import CategoryIcon from "./CategoryIcon";
import { Button, Card } from 'react-bootstrap';

export default function CategoryButton(props) {
    let category = props.category;
    let cardColor = "outline-success";
    switch (category) {
        case 'water':
        case 'birds':
            cardColor = "outline-primary";
            break;

        case 'reptiles':
        case 'rodents':
            cardColor = "outline-secondary";
            break;

        case 'others':
            cardColor = "outline-danger";
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Button id={props.id} variant={cardColor}>
                <CategoryIcon category={category} />
                &nbsp;
                {props.name}
            </Button>
        </Card>
    );
}