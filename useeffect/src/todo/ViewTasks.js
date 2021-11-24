import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTask } from '../store/actionCreator';

function ViewTasks () {
    const list = useSelector(state => state.todoTask.tasks);
    const dispatch = useDispatch();
    console.log(list);
    useEffect(() => {
        dispatch(getTask());
    }, [dispatch]);
    return (
        <div className="container page-wrapper">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Task <b>Details</b></h2></div>
                            <div className="col-sm-4">
                                <div className="search-box">
                                    <i className="material-icons">&#xE8B6;</i>
                                    <input type="text" className="form-control" placeholder="Search&hellip;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Sr no</th>
                                <th>Assigned to</th>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list && list.map((item, index) => {
                                    console.log('list item ', item.assiggnedTo);
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.assiggnedTo}</td>
                                            <td>{item.taskName}</td>
                                            <td>{item.taskStatus}</td>
                                            <td>
                                                <Link to="/" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></Link>
                                                <Link to="/" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>
                                                <Link to="/" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                        <ul className="pagination">
                            <li className="page-item disabled"><Link to="/"><i className="fa fa-angle-double-left"></i></Link></li>
                            <li className="page-item"><Link to="/" className="page-link">1</Link></li>
                            <li className="page-item"><Link to="/" className="page-link">2</Link></li>
                            <li className="page-item active"><Link to="/" className="page-link">3</Link></li>
                            <li className="page-item"><Link to="/" className="page-link">4</Link></li>
                            <li className="page-item"><Link to="/" className="page-link">5</Link></li>
                            <li className="page-item"><Link to="/" className="page-link"><i className="fa fa-angle-double-right"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTasks;