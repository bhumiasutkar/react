import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTask } from '../store/actionCreator';
import Modal from '../modals/Modal';
import Search from './Search';
import Pagination from './Pagination';
import NewTask from './NewTask';
import ProgressTask from './ProgressTask';
import DoneTask from './DoneTask';
import { editTask } from '../store/actionCreator';
import PageLayout from '../layout/PageLayout';


function ViewTasks () {
    const [isOpen, setIsOpen] = useState(false);
    const [taskId, setTaskId] = useState({ target: '', type: '' });
    const [formData, setFormData] = useState();

    let list = useSelector(state => state.todoTask.tasks);
    const dispatch = useDispatch();

    const actionHandler = (target, type) => {
        setIsOpen(!isOpen);
        setTaskId({ target: target, type: type });
        if (type === 'edit-modal') {
            const item = list.find(el => el.id === target);
            setFormData(item);
            dispatch(editTask(target, item));
        }
    };
    const searchHandler = (e) => {
        let term = e.target.value;
        let filter = list.filter(el => el.assiggnedTo.toLowerCase().indexOf(term) !== -1);
        console.log(filter);
    };

    useEffect(() => {
        dispatch(getTask());
    }, [dispatch]);

    return (
        <>
            <section className="" style={{ "backgroundColor": "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-md-12 col-xl-10">
                            <Search searchHandler={searchHandler} />
                        </div>
                        <div className="col-md-12 col-xl-10">

                            <div className="card">

                                <div className="card-header p-3">
                                    <h5 className="mb-0"><i className="fas fa-tasks me-2"></i>Task List</h5>
                                </div>
                                <div className="card-body" data-mdb-perfect-scrollbar="true" >
                                    <NewTask list={list} deleteHandler={actionHandler} />
                                </div>
                                <div className="card-footer text-end p-3">
                                    <button className="me-2 btn btn-link">Cancel</button>
                                    <button className="btn btn-primary">Add Task</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} target={taskId.target} setIsOpen={setIsOpen} type={taskId.type} formData={formData} />

            </section>
        </>
    );
}

export default PageLayout(ViewTasks);