import './tricks.css';
import React, { useState, useEffect } from 'react';

const Tricks = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/tricks')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log('Error fetching data', error);
            });
    }, []);

    return (
        <div className='trick-list'>
            {data.map(trick => (
                <div className='trick-card' key={trick.id}>
                    <h2>{trick.stance} {trick.name}</h2>
                    <p>Obstacle: {trick.obstacle}</p>
                    <p>Link to tutorial:</p>
                    <a href={trick.tutorial} target="_blank" rel="noopener noreferrer">{trick.tutorial}</a>
                </div>
            ))}
        </div>
    );
}

export default Tricks;