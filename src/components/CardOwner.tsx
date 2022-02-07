import React from 'react';
import { Owner } from '../interfaces/reqRes';

export const CardOwner = ({id, title, firstName, lastName, picture}:Owner) => {
  return (
        <div className="card mb-3" key={ id.toString() }>
            <div className="row g-0">
                <div className="col-md-2">
                    <img 
                        src={ picture } 
                        alt={ firstName } 
                        style={{
                            margin: 15,
                            width: 60,
                            borderRadius: 100
                        }}
                    />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{firstName} {lastName}</p>
                    </div>
                </div>
            </div>
        </div>
  );
};
