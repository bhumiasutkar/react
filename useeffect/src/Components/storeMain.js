import React, { useEffect } from 'react';
import { getUser } from '../store/actionCreator';
import { useDispatch } from 'react-redux';
import User from './user/User';

function StoreMain () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);
    // const userData = useSelector(state => state.userRed.user); //state.userRed is reducer in store file
    // const userList = userData.map((el) =>
    //     <li key={el.id}>{el.username}</li>
    // );
    return (
        <div>
            <h1>call for get user</h1>
            <User />
        </div>
    );
}

export default StoreMain;