import React from 'react';
import TaskTable from './TaskTable';
function DoneTask (props) {
    const { list, deleteHandler } = props;
    const newTask = list && list.filter(el => el.taskStatus === 'done');
    return (
        <>
            <TaskTable list={newTask} deleteHandler={deleteHandler} />
        </>
    );
}

export default DoneTask;