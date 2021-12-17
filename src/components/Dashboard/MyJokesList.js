import { useState, useContext, useEffect, Suspense } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import * as jokeService from '../../services/jokeService';
import MyJokeCard from './Cards/MyJokeCard';


function MyJokes() {
    const { user } = useContext(AuthContext);
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        jokeService.getAll()
            .then(res => {
                let own = Object.values(res).filter(a => a.ownerId == user._id);    
                            
                setJokes(own);
            });
    }, []);


    return (
        <>
            <Suspense fallback={<p>Зареждане...</p>}>
                <h3>Моите вицове</h3>
                <div className="articles-container">
                    {jokes.map(x => <MyJokeCard id={x._id} {...x} />)}
                </div>       
            </Suspense>
        </>
    );
}

export default MyJokes;