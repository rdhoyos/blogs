import React from 'react';
import { Post } from '../interfaces/reqRes';
import { CardOwner } from './CardOwner';



export const CardPost = ({ id, image, likes,tags,text, publishDate, owner, }: Post) => {
  return (
    <div className="col-6" key={ id.toString() }>
        {/* <div className="card h-100">
            <CardOwner {...owner}/>
            <img 
                        src={ image } 
                        alt={ text } 
                        style={{
                            width: 100,
                        }}
                    />
            <div className="card-body">
            <h5 className="card-title">{text}</h5>
            <p className="card-text">{likes}</p>
            </div>
        </div> */}
        <div className="card h-100">
            <CardOwner {...owner}/>
                <div className="col-md-4">
                    <img 
                        src={ image } 
                        alt={ text } 
                        style={{
                            width: 150
                        }}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{text}</h5>
                        {tags.map((tag, index) => {
                            return (<span  key={index} className="m-1 bg-danger text-white">{tag}</span>) 
                            }
                        )}
                        <p className="card-text">{likes}</p>
                    </div>
                </div>
        </div>    
    </div>
    );
};
