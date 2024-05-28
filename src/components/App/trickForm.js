import React, { useState } from 'react';
import './trickForm.css';

const TrickForm = ({ addTrick }) => {
    const [formState, setFormState] = useState({
        stance: 'Regular',
        name: '',
        obstacle: 'Flatground',
        tutorial: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTrick = {
            id: Date.now(),
            ...formState
        };
        addTrick(newTrick);
        setFormState({
            stance: 'Regular',
            name: '',
            obstacle: 'Flatground',
            tutorial: ''
        });
    };

    return (
        <form className="trick-form" onSubmit={handleSubmit}>
            <label>
                Stance:
                <select name="stance" value={formState.stance} onChange={handleChange}>
                    <option value="Regular">Regular</option>
                    <option value="Switch">Switch</option>
                </select>
            </label>
            <label>
                Name of Trick:
                <input type="text" name="name" value={formState.name} onChange={handleChange} />
            </label>
            <label>
                Obstacle:
                <select name="obstacle" value={formState.obstacle} onChange={handleChange}>
                    <option value="Flatground">Flatground</option>
                    <option value="Ledge">Ledge</option>
                    <option value="Rail">Rail</option>
                    <option value="Stairs">Stairs</option>
                    <option value="Pool">Pool</option>
                </select>
            </label>
            <label>
                Link to Tutorial:
                <input type="text" name="tutorial" value={formState.tutorial} onChange={handleChange} />
            </label>
            <button type="submit">SEND IT</button>
        </form>
    );
};

export default TrickForm;