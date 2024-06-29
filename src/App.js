import React from "react";
import { Provider } from "react-redux";

import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>ToDo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
