import React from 'react';

const ExpenseSummary = ({ expenses }) => {
    const summary = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div>
            <h2>Résumé des Dépenses par Catégorie</h2>
            <ul>
                {Object.keys(summary).map((category) => (
                    <li key={category}>
                        {category}: {summary[category]}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseSummary;
