import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { Login } from '../components/Login';
import { Users } from '../components/Users';
import { Blog } from '../components/Blog';



export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/blog"
                    element={
                        <PublicRoute >
                            <Blog />
                        </PublicRoute>
                    }
                />

                <Route path="/login"
                    element={
                        <PublicRoute >
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route path="/*"
                    element={
                        <PrivateRoute >
                            <Users />
                        </PrivateRoute>
                    }
                />


            </Routes>
        </BrowserRouter>
    )
}