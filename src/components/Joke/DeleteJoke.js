import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import * as jokeService from '../../services/jokeService';

const DeleteJoke = () => {
    const { jokeId } = useParams();
    const [path, setPath] = useState("");

    const { user } = useContext(AuthContext);

    useEffect(() => {
        jokeService.remove(jokeId, user.accessToken)
            .then(() => {
                setPath('/');
            });
    }, "");


    return <Navigate to={path} />
}

export default DeleteJoke;