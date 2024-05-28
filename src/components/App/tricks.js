import React from 'react';
import { deleteTrick } from './apiCalls';
import './tricks.css';

const Tricks = ({ data, removeTrickFromState }) => {

  const handleDelete = (id) => {
    deleteTrick(id)
      .then(() => {
        removeTrickFromState(id);
      })
      .catch(error => {
        console.log('Error deleting trick', error);
      });
  };

  return (
    <div className='trick-list'>
      {data.map(trick => (
        <div className='trick-card' key={trick.id}>
          <h2>{trick.name}</h2>
          <p>Obstacle: {trick.obstacle}</p>
          <p>Link to tutorial: <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">{trick.tutorial}</a></p>
          <button onClick={() => handleDelete(trick.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Tricks;