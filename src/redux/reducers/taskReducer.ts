import { ActionTypes } from "../constants/actionTypes";

const initialState: TaskState = {
    tasks: []
};

export const taskReducer = (
    state: TaskState = initialState,
    action: SetTaskAction
): TaskState => {
    switch (action.type) {
        case ActionTypes.SET_TASKS:
           return {
               ...state,
               tasks: state.tasks.concat(action.tasks)
        }
        default:
            return state;
}
};