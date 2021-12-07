import TaskTable from './TaskTable';

function NewTask (props) {
    const { list, deleteHandler } = props;
    const newTask = list && list.filter(el => el.taskStatus === 'new');
    return (
        <>
            <TaskTable list={list} actionHandler={deleteHandler} />
        </>
    );
}

export default NewTask;