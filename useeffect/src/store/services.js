import axios from "axios";

export const createTodoItem = async (createdata) => {

    const data = await axios.post('http://localhost:40001/todo', createdata);
    return data;
};

export const deleteTodoItem = async (id) => {
    const filerData = await axios.delete(`http://localhost:40001/todo/${id}`);
    return filerData;
};

export const getTodoItem = async () => {
    const data = await axios.get(`http://localhost:40001/todo`);
    return data;
};

export const filterTodoItem = async (key) => {
    const filter = await axios.get(`http://localhost:40001/todo/${key}`);
    return filter;
};

export const editTodoItem = async (id, item) => {
    const updated = await axios.put(`http://localhost:40001/todo/${id}`, item);
    return updated;
};