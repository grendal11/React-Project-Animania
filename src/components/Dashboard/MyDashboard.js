import { useState, useContext, useEffect, Suspense } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as articleService from '../../services/articleService';
import MyArticleCard from './Cards/MyArticleCard';
import MyJokesList from './MyJokesList';


function MyDashboard() {
    const { user } = useContext(AuthContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getAll()
            .then(res => {
                let own = Object.values(res).filter(a => a.ownerId == user._id);    
                            
                setArticles(own);
            });
    }, []);


    return (
        <>
            <Suspense fallback={<p>Зареждане...</p>}>
                <h3>Моите статии</h3>
                <div className="articles-container">
                    {articles.map(x => <MyArticleCard id={x._id} {...x} />)}
                </div>
                {/* <br />
                <h3>Моите обяви</h3> */}
                <br />
                <MyJokesList />
            </Suspense>
        </>
    );
}

export default MyDashboard;