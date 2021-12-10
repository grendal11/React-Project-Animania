import { Row, Col, Card } from 'react-bootstrap';

function ArticlePart(props) {
    return (
        <Row>
            <Col className="article-part">
                <Card border={props.color}>
                    <Card.Header className={"part-header text-" + props.color}>
                        {props.part}
                        {props.headValue ? ": " + props.headValue : null}</Card.Header>
                        {props.text
                            ? <Card.Text className="part-content">
                                {props.text}
                            </Card.Text>
                            : null
                        }
                </Card >
            </Col>
        </Row>
    );

}

export default ArticlePart;