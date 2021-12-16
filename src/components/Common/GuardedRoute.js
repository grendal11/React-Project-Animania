
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService';

const GuardedRoute = () => {

    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
}

export default GuardedRoute;