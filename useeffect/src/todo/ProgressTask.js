import React from 'react';
import TaskTable from './TaskTable';

const ProgressTask = (props) => {
    const { list, deleteHandler } = props;
    const newTask = list && list.filter(el => el.taskStatus === 'inProgress');
    return (
        <>
            <TaskTable list={newTask} deleteHandler={deleteHandler} />
        </>
    );
};

export default ProgressTask;