import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/action';

//initializes a state variable taskDescription using the useState hook
const EditTask = (props) => {
    const [taskDescription, setTaskDescription] = useState(props.description);
    const dispatch = useDispatch(); //initializes the dispatch function using the useDispatch hook from react-redux

    //initializing the addtask button to trigger when click
    const handleEditTask = () => {
        if (taskDescription.trim() !== '') {
        const newTask = {
            id: Date.now(),
            description: taskDescription,
            isDone: false,
        };
        dispatch(editTask(newTask));
        setTaskDescription('');
        }
    };

    return (
        <div>
        <input
            className='edit-task-input'
            type="text"
            value={taskDescription}
            onChange={event => setTaskDescription(event.target.value)}
        />
        <button className='edit-task-button' onClick={handleEditTask}>Add Task</button>
        </div>
    );
    };

export default EditTask;