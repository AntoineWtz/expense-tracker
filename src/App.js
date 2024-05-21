import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';

const App = () => {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold m-4 text-center">Expense Tracker</h1>
      <ExpenseTracker />
    </div>
  );
};

export default App;
