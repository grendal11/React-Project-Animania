import { useState, useEffect } from 'react';
import * as reactionService from '../../services/reactionService';

function JokeStats(props) {

    const [reactions, setReactions] = useState({likes:0, laughs: 0, dislikes: 0});

    useEffect(() => {
        reactionService.getJokeReactions(props.jokeId)
            .then(res => {

                setReactions(res);
            });
    }, {likes:0, laughs: 0, dislikes: 0});

    return (
        <>
            <div className="stats-buttons">
                <span variant="success-outline" className="text-success"><i className="fas fa-thumbs-up"></i> {reactions.likes}</span>
                &nbsp; &nbsp;
                <span variant="success-outline" className="text-warning"><i class="far fa-laugh"></i> {reactions.laughs}</span>
                &nbsp; &nbsp;
                <span variant="success-outline" className="text-danger"><i className="fas fa-thumbs-down"></i> {reactions.dislikes}</span>
            </div>
        </>
    );
}

export default JokeStats;