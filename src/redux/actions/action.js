export const addTask = task => ({
    type: 'ADD_TASK', // Action type for adding a task
    payload: task,      // Data of the task being added
    });
    
    // Action creator function to toggle a task
    export const toggleTask = taskId => ({
        type: 'TOGGLE_TASK', // Action type for toggling a task
        payload: taskId,        // ID of the task being toggled
    });
    
    // Action creator function to toggle a task
    export const toggleEdit = taskId => ({
        type: 'TOGGLE_EDIT', // Action type for toggling a task
        payload: taskId,        // ID of the task being toggled
    });
    
    // Action creator function to edit a task
    export const editTask = task => ({
        type: 'EDIT_TASK', // Action type for editing a task
        payload: task,  // Updated data of the task being edited
    });