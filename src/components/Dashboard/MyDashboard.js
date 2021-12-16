import { useState, useContext, useEffect, Suspense } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as articleService from '../../services/articleService';
import MyArticleCard from './Cards/MyArticleCard';


function MyDashboard() {
    const { user } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getAll()
            .then(res => {
                console.log(res);
                setArticles(Object.values(res));
            });
    }, []);


    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <h3>Моите статии</h3>
                <div className="articles-container">
                    {articles.map(x => <MyArticleCard id={x._id} {...x} />)}
                </div>
                <br />
                <h3>Моите обяви</h3>
                <br />
                <h3>Моите вицове</h3>
            </Suspense>
        </>
    );
}

export default MyDashboard;