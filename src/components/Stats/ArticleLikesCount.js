import {useState, useEffect} from 'react';
import * as reactionService from '../../services/reactionService';

function ArticleLikesCount(props) {

    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        reactionService.getArticleLikesCount(props.articleId)
            .then(res => {

                setLikesCount(res);
            });
    }, 0);

    return (
        <>
          <span variant="primary-outline" className="text-success likes"><i className="fas fa-thumbs-up"></i>Харесвания ({likesCount})</span>
        </>
    );
}

export default ArticleLikesCount;