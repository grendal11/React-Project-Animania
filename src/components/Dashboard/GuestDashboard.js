import * as articleService from '../../services/articleService';
import { useState, useEffect, Suspense } from 'react';
import ArticleCard from './Cards/ArticleCard';
import LastJoke from '../Joke/LastJoke';

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
            <Suspense fallback={<p>Зареждане...</p>}>

                {/* <h3>Последни обяви</h3>
                <br /> */}
                <h3>Последна статии</h3>
                <div className="articles-container">
                    {articles.map(x => <ArticleCard id={x._id} {...x} />)}
                </div>
                <br />
                <h4>Последно добавен виц</h4>
                <LastJoke />
            </Suspense>
        </>
    );
}

export default GuestDashboard;