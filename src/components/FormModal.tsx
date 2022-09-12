import { Dispatch, useCallback, useState } from "react";
import { Form, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { setTasks } from "../redux/actions/taskActions";
import { postCardToList } from "../util";

export const FormModal = (props: ITask) => {
    
    const dispatch: Dispatch<any> = useDispatch();
    const [modalData, setModalData] = useState({
        title: "",
        isOpen: false
    });
    const showModal = () => {
        setModalData({...modalData, isOpen: true})
    };

    const hideModal = () => {
        setModalData({...modalData, isOpen: false})
    };

    const post = () => {
        const title = modalData.title;
        if(title){
            postCardToList(props.id, title).then((response) => {
                let tasks = [];
                tasks.push(response.data);
                dispatch(setTasks(tasks));
               
            });
        } else {
            alert("Error! Title cannot be blank");
        }
    };

    const handleClick = useCallback(() => {
        dispatch(setTasks([{id: "342", name: "Your Guide to React.useCallback"}]));
        setModalData({...modalData, isOpen: false});
    },[]);

    return (
        <>
            <button className="btn btn-primary" onClick={showModal}>Add</button>
            <Modal show={modalData.isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={modalData.title} placeholder="Enter title" 
                            onChange={(e) => 
                            setModalData({...modalData, title: e.target.value})}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                    <button className="btn btn-primary" onClick={handleClick}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}