import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const categories = [
        { name: 'Food', color: 'bg-red-500' },
        { name: 'Transport', color: 'bg-green-500' },
        { name: 'Entertainment', color: 'bg-blue-500' },
        { name: 'Utilities', color: 'bg-yellow-500' },
        { name: 'Other', color: 'bg-gray-500' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseCategory = category === 'Custom' ? customCategory : category;
        addExpense({ amount: parseFloat(amount), category: expenseCategory, date });
        setAmount('');
        setCategory('');
        setCustomCategory('');
        setDate(new Date().toISOString().split('T')[0]);
    };

    return (
        <form onSubmit={handleSubmit} className="m-auto w-1/3 bg-gray-50 p-8 rounded-md">
            <div className="m-2">
                <label className="block">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="p-2 border rounded w-full"
                />
            </div>
            <div className="m-2">
                <label className="block">Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="p-2 border rounded w-full"
                >
                    <option value="" disabled>Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                    <option value="Custom">Custom</option>
                </select>
                {category === 'Custom' && (
                    <input
                        type="text"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                        placeholder="Enter custom category"
                        required
                        className="p-2 border rounded w-full mt-2"
                    />
                )}
            </div>
            <div className="m-2">
                <label className="block">Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded block mx-auto">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
