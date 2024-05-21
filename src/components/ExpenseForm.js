import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ amount: parseFloat(amount), category, date });
        setAmount('');
        setCategory('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Montant:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Catégorie:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Ajouter Dépense</button>
        </form>
    );
};

export default ExpenseForm;
