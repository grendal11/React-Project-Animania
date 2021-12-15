import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import GuestDashboard from './GuestDashboard';
import MyDashboard from './MyDashboard';

function Dashboard() {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user.email
                ? <MyDashboard />
                : <GuestDashboard />}
        </>
    );
}

export default Dashboard;