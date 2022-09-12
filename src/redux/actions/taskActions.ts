import { ActionTypes } from "../constants/actionTypes";


export const AddTask = (task: ITask) => {
    const action: TaskAction = {
        type: ActionTypes.ADD_TASK,
        task
    };
    return action;
};

export const RemoveTask = (task: ITask) => {
    const action: TaskAction = {
        type: ActionTypes.REMOVE_TASK,
        task
    };
    return action;
};

export const setTasks = (tasks: ITask[]) => {
    const action: SetTaskAction = {
        type: ActionTypes.SET_TASKS,
        tasks
    };
    return action;
};