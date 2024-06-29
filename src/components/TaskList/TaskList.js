import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./taskList.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
