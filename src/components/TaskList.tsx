import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCardsFromList, fetchLists } from "../util";
import { Dispatch } from "redux";
import { setTasks } from "../redux/actions/taskActions";
import { Task } from "./Task";

export const TaskList = (props: ITask) => {
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            fetchCardsFromList(props.id).then((response) => {
                dispatch(setTasks(response.data));
            }).catch((err) => {
                console.log(err);
            });
        };
        fetchData();
    }, []);
    return (
        <div>
            <Task id={props.id} name={props.name}/>
        </div>
    )
}