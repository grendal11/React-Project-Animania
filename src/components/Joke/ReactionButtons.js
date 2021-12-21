import { AuthContext } from '../../contexts/AuthContext';
import { useState, useEffect, useContext } from 'react';

import { Button } from 'react-bootstrap';

import * as reactionService from '../../services/reactionService';
import JokeStats from '../Stats/JokeStats';

function ReactionButtons(props) {
    const { user } = useContext(AuthContext);

    const [reacted, setReacted] = useState([]);

    useEffect(() => {
        reactionService.getJokeReacted(props.jokeId, user._id)
            .then(res => {

                if (res > 0) {
                    setReacted([true]);
                }
                else 
                {
                    setReacted([false]);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <>
            {reacted[0] == true
                ? <JokeStats jokeId={props.jokeId} />
                : <>
                    <div className="joke-buttons">
                        <Button variant="success-outline" href={`/joke/${props.jokeId}/reaction/like`} className="text-success reaction-button"><i className="fas fa-thumbs-up"></i></Button>
                        <Button variant="success-outline" href={`/joke/${props.jokeId}/reaction/laugh`} className="text-warning reaction-button"><i class="far fa-laugh"></i></Button>
                        <Button variant="success-outline" href={`/joke/${props.jokeId}/reaction/dislike`} className="text-danger reaction-button"><i className="fas fa-thumbs-down"></i></Button>
                    </div>
                </>
            }
        </>
    );
}

export default ReactionButtons;