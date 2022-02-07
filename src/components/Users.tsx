import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { reqResApi } from '../api/reqRes';
import { AuthContext } from '../contexts/AuthContext';
import { ReqUsers, Owner } from '../interfaces/reqRes';
import { types } from '../types/types';
import { CardOwner } from './CardOwner';

export const Users = () => {

     const navigate = useNavigate();
    const { dispatch } = useContext( AuthContext )
    const [users, setUsers] = useState<Owner[]>([]);

    const pageRef = useRef(0);

    useEffect(() => {
        
        loadUsers()
      
    }, []);
    
    const loadUsers = async() => {
        
        const resp = await reqResApi.get<ReqUsers>('/user', {
            params: {
                limit: 10,
                page: pageRef.current
            },
            headers: {
                'app-id': '62013c2070286383da81515b'
            }
        })

        console.log(resp);

        if( resp.data.data.length > 0 ){ 
            setUsers( resp.data.data );
        } else {
            pageRef.current--;
            alert('No hay mas registros');
        }

    }

    const nextPage = () => {
        pageRef.current ++;
        loadUsers();
    }

    const previousPage = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current --;
            loadUsers();
        }
    }

    const handleLogout = () => {
        const action = {
            type: types.logout
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/blog';


        navigate( lastPath, {
            replace: true
        });
    }

  return (
    <>
        <h1>
            Users
           </h1> 
        <hr/>
          <div className="row row-cols-1 row-cols-md-3 g-4">
              {users.map( (owner) => {return <CardOwner {...owner}/>} )}
          </div>

          <button
                className="btn btn-primary"
                onClick={ previousPage }
            >
                Anteriores
            </button>

            &nbsp;

            <button
                className="btn btn-primary"
                onClick={ nextPage }
            >
                Siguientes
            </button>

            &nbsp;

            <button 
                className="btn btn-danger"
                onClick={ handleLogout }
                >
                    Logout
            </button>
        
    </>
  )
};