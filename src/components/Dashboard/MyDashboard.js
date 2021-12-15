import { AuthContext } from '../../contexts/AuthContext';
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

function MyDashboard() {
    const { user } = useContext(AuthContext);


    return (
        <>
            <h3>Моите статии</h3>
            <br />
            <h3>Моите обяви</h3>
            <br />
            <h3>Моите вицове</h3>
        </>
    );
}

export default MyDashboard;