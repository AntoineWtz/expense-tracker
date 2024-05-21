import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div>
            <h2>Liste des Dépenses</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.date} - {expense.category}: {expense.amount}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
