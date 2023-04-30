import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provaiders/AuthProvaider/AuthProvaider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PRoute = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location=useLocation();

    if (loading) {
        return  <Spinner animation="border" variant="info" />
    }
    if (user) {
        return children
    } 
        
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PRoute;