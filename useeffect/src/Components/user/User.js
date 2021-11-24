import React from 'react';
import { useSelector } from 'react-redux';


function User () {
    const userData = useSelector(state => state.userRed.user); //state.userRed is reducer in store file
    const userList = userData.map((el) =>
        <li key={el.id}>{el.username}</li>
    );
    return (
        <div>
            <h1>User page</h1>
            <ul>{userList}</ul>
        </div>
    );
}

export default User;