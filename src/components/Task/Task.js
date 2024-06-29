import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTaskCompletion } from '../../Redux/actions';
import './task.css';


const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.task);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask(task.id, newTask));
    setIsEditing(false);
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <div className="task">
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompletion}
      />
      {isEditing ? (
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.task}
        </span>
      )}
      <div className="task-buttons">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
