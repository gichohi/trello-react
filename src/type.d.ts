interface ITask {
    id: string
    name: string
    idList?: string
}

type TaskState = {
    tasks: ITask[]
}

type TaskAction = {
    type: string
    task: ITask
}

type SetTaskAction = {
    type: string
    tasks: ITask[]
}