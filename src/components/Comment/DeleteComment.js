import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as commentService from '../../services/commentService';

const DeleteComment = () => {
    const { articleId, commentId } = useParams();
    const [path, setPath] = useState("");

    const { user } = useContext(AuthContext);

    useEffect(() => {
        commentService.remove(commentId, user.accessToken)
            .then(() => {
                setPath(`/article/${articleId}`);
            });
    }, "");


    return <Navigate to={path} />
}

export default DeleteComment;