import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as reactionService from '../../services/reactionService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const AddJokeReaction = () => {
    const { jokeId, reactionType } = useParams();
    const [path, setPath] = useState("");

    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        reactionService.getJokeReacted(jokeId, user._id)
            .then(res => {
                console.log("HELLOOOOO" + res);

                if (res < 1) {
                    reactionService.addReaction({ userId: user._id, jokeId, reactionType }, user.accessToken)
                        .then(res => {
                            console.log(res)
                            // setPath('/jokes');
                        })
                        .catch(err => {
                            console.log(err)
                            addNotification('Възникна грешка', types.error);
                            // setPath('/jokes');
                        });
                }
                else {
                    addNotification('Вече сте реагирали на този виц', types.error);
                    // setPath('/jokes');
                }

            })
            .catch(err => {
                console.log(err)
                addNotification('Възникна грешка', types.error);
                // setPath('/jokes');
            });
            setPath('/jokes');
    }, "");


    return (
        <Navigate to={path} />
    );
}

export default AddJokeReaction;