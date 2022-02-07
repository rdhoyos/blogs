import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { types } from '../types/types';


export const Login = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Ronal Hoyos' }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/blog';


        navigate( lastPath, {
            replace: true
        });
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
                >
                    Login
            </button>
        </div>
    )
}