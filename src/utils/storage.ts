import type { Todo } from '../types/todo';

const STORAGE_KEY = 'todo_app_data';

export const loadTodos = (): Todo[] => {
    try {
        const serialized = localStorage.getItem(STORAGE_KEY);
        if (!serialized) return [];
        return JSON.parse(serialized) as Todo[];
    } catch (e) {
        console.error('Failed to load todos', e);
        return [];
    }
};

export const saveTodos = (todos: Todo[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
        console.error('Failed to save todos', e);
    }
};
