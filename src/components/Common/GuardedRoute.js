
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService';

const GuardedRoute = () => {

    return isAuthenticated() ? <Outlet /> : <Navigate to="/notAuthorized" />
}

export default GuardedRoute;