import React, { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqPosts, Post } from '../interfaces/reqRes';
import { CardPost } from './CardPost';

const Blog = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const pageRef = useRef(0);

    useEffect(() => {
        
        loadPosts()
      
    }, []);
    
    const loadPosts = async() => {
        
        const resp = await reqResApi.get<ReqPosts>('/post', {
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
            setPosts( resp.data.data );
        } else {
            pageRef.current--;
            alert('No hay mas registros');
        }

    }

    const nextPage = () => {
        pageRef.current ++;
        loadPosts();
    }

    const previousPage = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current --;
            loadPosts();
        }
    }

  return (
    <>
        <h1>
            My Blog
           </h1> 
        <hr/>
          <div className="row row-cols-1 row-cols-md-3 g-4">
              {posts.map( CardPost )}
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
        
    </>
  )
};

export default Blog;