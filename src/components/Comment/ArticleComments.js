import Comment from './Comment';
import { useState, useEffect, Suspense } from 'react';

import * as commentService from '../../services/commentService';

function ArticleComments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getComments(props.articleId)
            .then(res => {
                setComments(res);
            });
    }, []);

    //TODO: rerender comments aftere delete
    return (
        <>
            <Suspense fallback={<p>Зареждане...</p>}>
                <br />
                {comments.map(c => <Comment id={c._id} comment={c} color={props.color} />)}
                <br />
            </Suspense>
        </>
    );
}

export default ArticleComments;