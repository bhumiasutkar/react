import TextInput from "../Components/UI/InputFields/TextInput";
import Button from '../Components/UI/Button/Button';
import './todo.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createTask } from "../store/actionCreator";

function CreateTodo (props) {
    const [formIsValid, setFormIsValid] = useState(true),
        dispatch = useDispatch(),
        initialTaskData = {
            id: 0,
            assiggnedTo: '',
            taskName: '',
            taskStatus: 'new'
        },

        [isData, setData] = useState(initialTaskData);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createTask(isData));
    };

    const changeHandler = (e) => {
        let { name, value } = e.target;

        if (name === 'taskStatus') {
            value = e.target.id;
        }
        setData({
            ...isData,
            [name]: value
        });
    };

    return (
        <div className="container pageWrapper" >
            <form>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-12">
                            <TextInput type="text" label="Assigned to" name="assiggnedTo" onChange={e => changeHandler(e)} value={isData.assiggnedTo} />
                        </div>
                        <div className="col-sm-12">
                            <TextInput type="text" label="Task" id="task" name="taskName" onChange={e => changeHandler(e)} />
                        </div>
                        <div className="col-sm-12">
                            <h6>Task status</h6>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="taskStatus" id="new" onChange={e => changeHandler(e)} />
                                <label className="form-check-label">
                                    New
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="taskStatus" id="inProgress" onChange={e => changeHandler(e)} />
                                <label className="form-check-label" >
                                    In Progress
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-12" >
                            <hr />
                            <Button type="button" disabled={!formIsValid} onClick={submitHandler}>
                                Create
                            </Button>
                        </div>


                    </div>
                </div>

            </form>

        </div>
    );
}

export default CreateTodo;