
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { getUser } from '../../services/authService';

const GuardedOwnerRoute = () => {
    const { articleId } = useParams();

    return getUser()._id == articleId ? <Outlet /> : <Navigate to="/notAuthorized" />
}

export default GuardedOwnerRoute;