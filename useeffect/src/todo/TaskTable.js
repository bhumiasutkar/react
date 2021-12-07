import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import usePagination from './../pagination/usePagination';
import pic from '../images/avatar.jpg';

function TaskTable (props) {
    const { list, actionHandler } = props;
    const rowsPerPage = 4;
    const [page, setPage] = useState(1);
    const { slice, range } = usePagination(list, page, rowsPerPage);

    return (
        <>
            <table className="table mb-0">

                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Assigned to</th>
                        <th>Task Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        slice && slice.map((item, index) => {
                            return (
                                <tr className="fw-normal" key={item.id}>
                                    <th>{index + 1}</th>
                                    <th>
                                        <img src={pic} className="shadow-1-strong rounded-circle" />
                                        <span className="ms-2">{item.assiggnedTo}</span>
                                    </th>
                                    <td className="align-middle">{item.taskName}</td>
                                    <td className="align-middle">
                                        <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                                    </td>
                                    <td className="align-middle">{item.taskStatus}</td>
                                    <td className="align-middle">
                                        <Link to="/" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></Link>
                                        <button className="edit" title="Edit" data-toggle="tooltip" onClick={el => actionHandler(item.id, 'edit-modal')}><i className="material-icons">&#xE254;</i></button>
                                        <button className="delete" title="Delete" data-toggle="tooltip" onClick={el => actionHandler(item.id, 'delete-modal')}>
                                            <i className="material-icons">&#xE872;</i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <Pagination range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
}

export default TaskTable;