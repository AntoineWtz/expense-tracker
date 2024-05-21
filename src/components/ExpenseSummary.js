import React from 'react';

const ExpenseSummary = ({ expenses }) => {
    const summary = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div className="m-4 w-full md:w-1/3">
            <h2 className="text-xl font-semibold m-2">Expense Summary by Category</h2>
            <ul className="list-disc list-inside">
                {Object.keys(summary).map((category) => (
                    <li key={category} className="m-2 p-2 border rounded flex justify-between items-center">
                        <span>{category}</span>
                        <span className="font-bold">{summary[category]}€</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseSummary;
