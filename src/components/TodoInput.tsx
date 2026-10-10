import React, { useState } from 'react';

interface TodoInputProps {
    onAdd: (title: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-input-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                className="todo-input"
                aria-label="New task title"
            />
            <button type="submit" className="todo-submit" disabled={!text.trim()}>
                Add
            </button>
        </form>
    );
};
