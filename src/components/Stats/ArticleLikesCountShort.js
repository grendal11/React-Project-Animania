import {useState, useEffect} from 'react';
import * as reactionService from '../../services/reactionService';

function ArticleLikesCountShort(props) {

    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        reactionService.getArticleLikesCount(props.articleId)
            .then(res => {

                setLikesCount(res);
            });
    }, 0);

    return (
        <>
          <span variant="primary-outline" className="text-success"><i className="fas fa-thumbs-up"></i> {likesCount}</span>
        </>
    );
}

export default ArticleLikesCountShort;