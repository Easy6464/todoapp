import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/Reducer';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <div>
            <h1 className="app-title">ToDo Application</h1>
            <div className="task-section">
              <h2 className="section-title">Add New Task</h2>
              <AddTask />
            </div>
            <div className="task-section">
              <h2 className="section-title-one">All Tasks</h2>
              <TaskList />
            </div>
            <div className="task-section">
              <h2 className="section-title-three">Pending Tasks</h2>
              <TaskList filter="notDone" />
            </div>
            <div className="task-section">
              <h2 className="section-title-two">Completed Tasks</h2>
              <TaskList filter="done" />
            </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;