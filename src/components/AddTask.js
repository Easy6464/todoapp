import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../redux/actions/action';

//initializes a state variable taskDescription using the useState hook
const AddTask = () => {
    const isEditing = useSelector(state => state.isEditing);
    const currentTask = useSelector(state => state.currentTask);
    const [taskDescription, setTaskDescription] = useState('');
    const dispatch = useDispatch(); //initializes the dispatch function using the useDispatch hook from react-redux

    useEffect(() => {
        setTaskDescription(isEditing ? currentTask.description : '')
    }, [isEditing])
    //initializing the addtask button to trigger when click
    const handleSubmitTask = () => {
        if (taskDescription.trim() !== '') {
        const newTask = {
            id: isEditing ? currentTask.id : Date.now(),
            description: taskDescription,
            isDone: isEditing ? currentTask.isDone : false,
        };
        dispatch(isEditing ? editTask(newTask) : addTask(newTask));
        setTaskDescription('');
        }
    };

    return (
        <div>
        <input
            className='add-task-input'
            type="text"
            value={taskDescription}
            onChange={event => setTaskDescription(event.target.value)}
        />
        <button className='add-task-button' 
            onClick={handleSubmitTask}>
            {isEditing ? 'Edit Task' : 'Add Task'}
        </button>
        </div>
    );
    };

export default AddTask;