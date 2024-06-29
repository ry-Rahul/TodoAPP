const getFromLocalStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
  const initialState = {
    tasks: getFromLocalStorage(),
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, task: action.payload.newTask } : task
          ),
        };
      case 'TOGGLE_TASK_COMPLETION':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
          ),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  