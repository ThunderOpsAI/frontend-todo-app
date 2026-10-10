import React from 'react';
import type { Todo } from '../types/todo';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="todo-label">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="todo-checkbox"
                />
                <span className="todo-text">{todo.title}</span>
            </label>
            <button
                onClick={() => onDelete(todo.id)}
                className="todo-delete"
                aria-label={`Delete ${todo.title}`}
            >
                Delete
            </button>
        </li>
    );
};
