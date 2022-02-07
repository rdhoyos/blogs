import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';




export const PublicRoute = ({ children } : any) => {

    const { user } = useContext(AuthContext);

    
    return user.logged
        ? <Navigate to="/users" />
        : children
}
