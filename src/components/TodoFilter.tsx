import React from 'react';
import type { FilterType } from '../types/todo';

interface TodoFilterProps {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
    return (
        <div className="todo-filters">
            {(['all', 'active', 'completed'] as FilterType[]).map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
};
