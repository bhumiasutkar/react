import TextInput from "../Components/UI/InputFields/TextInput";
import Button from '../Components/UI/Button/Button';
import './todo.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createTask } from "../store/actionCreator";
import placeholder from "../images/placeholder.png";
import PageLayout from "../layout/PageLayout";

function CreateTodo (props) {
    const [{ alt, src }, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });
    const [formIsValid, setFormIsValid] = useState(true),
        dispatch = useDispatch(),
        initialTaskData = {
            id: 0,
            assiggnedTo: '',
            taskName: '',
            taskStatus: 'new'
        },
        [isData, setData] = useState(props.data ? props.data : initialTaskData);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(isData);
        dispatch(createTask(isData));
    };

    const changeHandler = (e) => {
        let { name, value } = e.target;

        if (name === 'taskStatus') {
            value = e.target.id;
        }
        if (name === 'profilePic') {
            if (e.target.files[0]) {
                setImg({
                    src: URL.createObjectURL(e.target.files[0]),
                    alt: e.target.files[0].name
                });
            }
            value = e.target.files[0].name;
        }
        setData({
            ...isData,
            [name]: value
        });
    };
    return (

        <section className="jumbotron">
            <div className="container">
                <form encType="multipart/form-data">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="col-sm-12">
                                <TextInput type="text" label="Assigned to" name="assiggnedTo" onChange={e => changeHandler(e)} value={isData.assiggnedTo} />
                            </div>
                            <div className="col-sm-12">
                                <TextInput type="text" label="Task" id="task" name="taskName" onChange={e => changeHandler(e)} value={isData.taskName} />
                            </div>
                            <div className="col-sm-12">
                                <TextInput accept=".png, .jpg, .jpeg" type="file" label="Upload Picture" id="picture" name="profilePic" onChange={e => changeHandler(e)} />
                                <img src={src} alt={alt} className="form-img__img-preview" />
                            </div>
                            <div className="col-sm-12">
                                <h6>Task status</h6>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="taskStatus" id="new" onChange={e => changeHandler(e)} value={isData.taskStatus} />
                                    <label className="form-check-label">
                                        New
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="taskStatus" id="inProgress" onChange={e => changeHandler(e)} value={isData.taskStatus} />
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
        </section>
    );
}

export default PageLayout(CreateTodo);