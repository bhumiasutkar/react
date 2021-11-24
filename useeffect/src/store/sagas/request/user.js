import axios from "axios";

export const requestGetUser = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return data;
};