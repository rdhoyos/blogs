import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { authReducer } from './reducer/authReducer';
import { AppRouter } from './Routers/AppRouter';

const init = () => {
  // return JSON.parse(localStorage.getItem('user')) || { logged: false };
  return {logged:false}
}

  const App = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );

    useEffect(() => {
      if ( !user ) return;

      localStorage.setItem('user', JSON.stringify(user) );
    }, [ user ])

    return (
      <AuthContext.Provider value={{
          user,
          dispatch
      }}>
          <AppRouter />
      </AuthContext.Provider>
  )
}

export default App;
