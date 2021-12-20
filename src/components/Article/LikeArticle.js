import { useParams, Navigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as reactionService from '../../services/reactionService';

const LikeArticle = () => {
    const { articleId } = useParams();
    const [path, setPath] = useState("");

    const { user } = useContext(AuthContext);

    useEffect(() => {
        reactionService.getArticleLiked(articleId)
            .then(res => {
                console.log(res);
                return;
                let result = res.map(x => x.userId);
                if (!result.includes(user._id)) {
                    reactionService.addLike({ userId: user._id, articleId }, user.accessToken)
                        .then(res => {
                            console.log(res)                           
                        });
                }
                setPath(`/article/${articleId}`);

            })
            .catch(err => {
                console.log(err)
            });

    }, "");


    return (
        <Navigate to={path} />
    );
}

export default LikeArticle;