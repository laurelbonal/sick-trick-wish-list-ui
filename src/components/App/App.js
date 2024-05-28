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

  const addTrickToState = (newTrick) => {
    setTricks(prevTricks => [...prevTricks, newTrick]);
  };

  const removeTrickFromState = (id) => {
    setTricks(prevTricks => prevTricks.filter(trick => trick.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sick Trick Wish List</h1>
      </header>
      <main>
        <TrickForm addTrickToState={addTrickToState} />
        <Tricks data={tricks} removeTrickFromState={removeTrickFromState} />
      </main>
    </div>
  );
};

export default App;