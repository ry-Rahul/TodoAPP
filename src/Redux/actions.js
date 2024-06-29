import { v4 as uuidv4 } from 'uuid';

export const addTask = (task) => {
  const newTask = { id: uuidv4(), task, completed: false };
  const tasks = [...getFromLocalStorage(), newTask];
  saveToLocalStorage(tasks);
  return {
    type: 'ADD_TASK',
    payload: newTask,
  };
};

export const deleteTask = (id) => {
  const tasks = getFromLocalStorage().filter(t => t.id !== id);
  saveToLocalStorage(tasks);
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};

export const editTask = (id, newTask) => {
  const tasks = getFromLocalStorage().map(t => (t.id === id ? { ...t, task: newTask } : t));
  saveToLocalStorage(tasks);
  return {
    type: 'EDIT_TASK',
    payload: { id, newTask },
  };
};

export const toggleTaskCompletion = (id) => {
  const tasks = getFromLocalStorage().map(t => (t.id === id ? { ...t, completed: !t.completed } : t));
  saveToLocalStorage(tasks);
  return {
    type: 'TOGGLE_TASK_COMPLETION',
    payload: id,
  };
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const getFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};
