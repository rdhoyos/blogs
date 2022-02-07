import { createContext } from 'react';
import { user } from '../interfaces/user';

interface AuthProps {
    user: user;
    dispatch: any
}

export const AuthContext = createContext({} as AuthProps);