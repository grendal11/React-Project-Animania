import Comment from './Comment';
import { useState,  useEffect } from 'react';

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
            <br />
            {comments.map(c => <Comment id={c._id} comment={c} color={props.color} />)}
            <br />
        </>
    );
}

export default ArticleComments;