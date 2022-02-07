import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';




export const PrivateRoute = ({ children } : any) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    
    return user.logged
        ? children
        : <Navigate to="/blog" />
}
