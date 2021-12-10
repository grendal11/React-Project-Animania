import CategoryButton from './CategoryButton';
import { Row, Col } from 'react-bootstrap';

function Articles(props) {
    let articles = props.articles;

    return (
        <>
            <br />
            <h2>Налични статии</h2>
            <br />
            <Row className="justify-content-center" xs='auto'>
                {articles.map(x =>
                    <Col lg='auto' md='auto' sm='auto' className='mt-2'>
                        <CategoryButton id={x._id} category={x.category} name={x.name} />
                    </Col>
                )}
            </Row>
        </>
    );

}

export default Articles;