import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div>
            <ExpenseForm addExpense={addExpense} />
            <div className="flex flex-col justify-evenly md:flex-row text-center">
                <ExpenseSummary expenses={expenses} />
                <ExpenseList expenses={expenses} />
            </div>
        </div>
    );
};

export default ExpenseTracker;
