// Define the initial state of the Redux store
const initialState = {
    tasks: [],
    currentTask: {},
    isEditing: false
    };
    // Reducer function that handles state updates based on dispatched actions
    const rootReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD_TASK':   // Add a new task to the tasks array
            return {
            ...state,
            tasks: [...state.tasks, action.payload],
            };
            // Toggle the completion status of a task
        case 'TOGGLE_TASK':
            return {
            ...state,
            tasks: state.tasks.map(task =>
                task.id === action.payload
                ? { ...task, isDone: !task.isDone }
                : task
            ),
            };
            // Edit the description of a specific task
        case 'TOGGLE_EDIT':
            console.log('toggle', action.payload)
            return {
                ...state,
                isEditing: !state.isEditing,
                currentTask: !state.isEditing ? 
                    state.tasks.find((t) => action.payload.id === t.id) : {}
            };
        case 'EDIT_TASK':
            return {
            ...state,
            isEditing: false,
            tasks: state.tasks.map(task =>
                task.id === action.payload.id
                ? { ...task, description: action.payload.description }
                : task
            ),
            };
            // Default case returns the current state if no matching action type is found
        default:
            return state;
        }
    };
    
    export default rootReducer;