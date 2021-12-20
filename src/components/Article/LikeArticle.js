import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as reactionService from '../../services/reactionService';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const LikeArticle = () => {
    const { articleId } = useParams();
    const [path, setPath] = useState("");

    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    useEffect(() => {
        reactionService.getArticleLiked(articleId, user._id)
            .then(res => {
                console.log(res);

                if (res < 1) {
                    reactionService.addLike({ userId: user._id, articleId }, user.accessToken)
                        .then(res => {
                            console.log(res)
                            setPath(`/article/${articleId}`);
                        })
                        .catch(err => {
                            console.log(err)
                            addNotification('Възникна грешка', types.error);
                        });
                }
                else {
                    addNotification('Вече сте харесали статията', types.error);
                    setPath(`/article/${articleId}`);
                }

            })
            .catch(err => {
                console.log(err)
                addNotification('Възникна грешка', types.error);
            });

    }, "");


    return (
        <Navigate to={path} />
    );
}

export default LikeArticle;