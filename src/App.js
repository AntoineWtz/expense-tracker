import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Suivi des Dépenses</h1>
      <ExpenseTracker />
    </div>
  );
};

export default App;
