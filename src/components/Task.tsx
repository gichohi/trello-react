import { useSelector } from "react-redux";
import { TaskList } from "./TaskList";

export const Task = (props: ITask) => {
    const tasks = useSelector((state: TaskState) => state.tasks);
    let items = tasks.filter(task => task.idList === props.id);
    const renderList = items.map((task) => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 id={task.id} className="card-title">{task.name}</h5>
                </div>
            </div>
        );
    });
    return <>{renderList}</>
}