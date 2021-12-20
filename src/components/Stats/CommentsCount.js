import {useState, useEffect} from 'react';
import * as commentService from '../../services/commentService';

function CommentsCount(props) {

    const [commentsCount, setcommentsCount] = useState(0);

    useEffect(() => {
        commentService.getCountByArticle(props.articleId)
            .then(res => {

                setcommentsCount(res);
            });
    }, 0);

    return (
        <>
            <span variant="success-outline" className="text-secondary"><i class="far fa-comments"></i> {commentsCount}</span>
        </>
    );
}

export default CommentsCount;