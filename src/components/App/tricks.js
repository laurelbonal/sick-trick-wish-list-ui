import React from 'react';
import './tricks.css';

const Tricks = ({ data }) => {
    return (
        <div className='trick-list'>
            {data.map(trick => (
                <div className='trick-card' key={trick.id}>
                    <h2>{trick.name}</h2>
                    <p>Obstacle: {trick.obstacle}</p>
                    <p>Link to tutorial:</p>
                    <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">{trick.tutorial}</a>
                </div>
            ))}
        </div>
    );
};

export default Tricks;