import * as articleService from '../../services/articleService';
import { useState, useEffect, Suspense } from 'react';
import ArticleCard from './Cards/ArticleCard';

function GuestDashboard() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getLast()
            .then(res => {
                console.log(res);
                setArticles(res);
            });
    }, []);

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>

                <h3>Последни обяви</h3>
                <br />
                <h3>Последна статии</h3>
                <div className="articles-container">
                    {articles.map(x => <ArticleCard id={x._id} {...x} />)}
                </div>
                <br />
                <h3>Нови вицове</h3>
            </Suspense>
        </>
    );
}

export default GuestDashboard;