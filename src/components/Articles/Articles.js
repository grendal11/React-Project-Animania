import * as articleService from '../../services/articleService';

import CategoryButton from './CategoryButton';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect, Suspense } from 'react';

function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getAll()
            .then(res => {
                setArticles(Object.values(res));
            });
    }, []);

    return (
        <>
            <br />
            <Suspense fallback={<p>Loading...</p>}>
                {articles.length > 0
                    ? <>
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
                    : <h3 className="no-articles">Няма налични статии</h3>
                }
            </Suspense>
        </>
    );

}

export default Articles;