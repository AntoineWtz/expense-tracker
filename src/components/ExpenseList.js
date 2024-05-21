import React from 'react';

const categories = {
    'Food': 'bg-red-300',
    'Transport': 'bg-green-300',
    'Entertainment': 'bg-blue-300',
    'Utilities': 'bg-yellow-300',
    'Other': 'bg-gray-300',
};

const ExpenseList = ({ expenses }) => {
    return (
        <div className="m-4 w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-2">Expense List</h2>
            <ul className="list-disc list-inside">
                {expenses.map((expense, index) => (
                    <li key={index} className="m-2 p-2 border rounded flex justify-between items-center">
                        <span>
                            {expense.date} - {expense.category}: {expense.amount}€
                        </span>
                        <span className={`m-2 px-2 py-1 rounded ${categories[expense.category] || 'bg-gray-500'}`}>
                            {expense.category}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
