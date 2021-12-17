import { useState, useEffect, Suspense } from 'react';

import Joke from './Joke';
import * as jokeService from '../../services/jokeService';

function JokesList() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        jokeService.getAll()
            .then(res => {
                setJokes(Object.values(res));
            });
    }, []);

    return (
        <>
            <Suspense fallback={<p>Зареждане...</p>}>
                <br />
                {jokes.map(c => <Joke id={c._id} joke={c} />)}
                <br />
            </Suspense>
        </>
    );
}

export default JokesList;