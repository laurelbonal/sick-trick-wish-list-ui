import React, { useState, useEffect } from 'react';
import Tricks from './tricks';
import TrickForm from './trickForm';
import { fetchTricks } from './apiCalls';
import './App.css';

const App = () => {
    const [tricks, setTricks] = useState([]);

    useEffect(() => {
        fetchTricks()
            .then(data => {
                setTricks(data);
            });
    }, []);

    const addTrick = (newTrick) => {
        setTricks([...tricks, newTrick]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Sick Trick Wish List</h1>
            </header>
            <main>
                <TrickForm addTrick={addTrick} />
                <Tricks data={tricks} />
            </main>
        </div>
    );
}

export default App;