import { useState, useEffect, useContext, Suspense } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as articleService from '../../services/articleService';

const GuardedOwnerRoute = async () => {
    const { articleId } = useParams();
    const { user } = useContext(AuthContext);
    const [owner, setOwner] = useState("");

    useEffect(() => {
        articleService.getOneNoComments(articleId)
            .then(res => {
                console.log(res);
                setOwner(res.ownerId);
            })
    }, "");

    //TODO: not finished

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                {owner != ""
                    ? user._id == owner ? <Outlet /> : <Navigate to="/notAuthorized" />
                    : null
                }
            </Suspense>
        </>
    );
}

export default GuardedOwnerRoute;