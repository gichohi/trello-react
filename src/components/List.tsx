import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setTasks } from "../redux/actions/taskActions";
import { fetchLists } from "../util";
import { ListComponent } from "./ListComponent";

export const List = () => {
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            fetchLists().then((response) => {
                dispatch(setTasks(response.data));
            }).catch((err) => {
                console.log(err);
            });
        };
        fetchData();
    }, []);
    return (
        <main role="main">
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row" >
                        <ListComponent/>
                    </div>
                </div>
            </div>
        </main>
    )
}