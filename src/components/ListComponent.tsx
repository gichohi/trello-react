import { useSelector } from "react-redux";
import { FormModal } from "./FormModal";
import { TaskList } from "./TaskList";

export const ListComponent = () => {
    const lists = useSelector((state: TaskState) => state.tasks);
    let items = lists.filter(list => list.name === "To Do" || list.name === "Doing");
    const renderlist = items.map((item) => {
        return (
            <div className="col-sm-6">
                <div className="card card-inner">
                    <div className="card-body">
                        <div className="text-right">
                            <FormModal id={item.id} name={item.name}/>
                        </div>
                        <h5 className="card-title">{item.name}</h5>
                        <TaskList id={item.id} name={item.name}/>
                    </div>
                </div>
            </div>
            
        );
    });
    return <>{renderlist}</>
};