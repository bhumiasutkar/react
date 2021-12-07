import React from 'react';
import { deleteTask } from '../store/actionCreator';
import { useDispatch } from 'react-redux';
import CreateTodo from '../todo/CreateTodo';

export const DeleteListModal = (props) => {
    const dispatch = useDispatch();
    console.log(props);

    const deleteTaskHandler = () => {
        dispatch(deleteTask(props.target));
        props.setIsOpen(false);
    };
    return (
        <>
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header flex-column">
                        <div className="icon-box">
                            <i className="material-icons">&#xE5CD;</i>
                        </div>
                        <h4 className="modal-title w-100">Are you sure?</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={props.onClose}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Do you really want to delete these records? This process cannot be undone.</p>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={props.onClose}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={deleteTaskHandler}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export const AddListModal = (props) => {
    const dispatch = useDispatch();
    console.log(props);

    const successTaskHandler = () => {
        dispatch(deleteTask(props.target));
        props.setIsOpen(false);
    };
    return (
        <>
            <div className="modal-dialog modal-success">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="material-icons">&#xE876;</i>
                        </div>
                        <h4 className="modal-title w-100">Awesome!</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">Your booking has been confirmed. Check your email for detials.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success btn-block" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export const EditListModal = (props) => {
    const dispatch = useDispatch();
    const editTaskHandler = () => {
        // dispatch(deleteTask(props.target));
        // props.setIsOpen(false);
    };
    return (
        <>
            <div className="modal-dialog modal-success">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="material-icons">&#xE254;</i>
                        </div>
                        <button type="button" className="close" data-dismiss="modal" onClick={props.onClose}>&times;</button>
                        <h4 className="modal-title w-100">Edit</h4>
                    </div>
                    <div className="modal-body">
                        <CreateTodo data={props.formData} />
                    </div>
                </div>
            </div>
        </>
    );
};

