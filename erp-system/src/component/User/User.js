import React, {useState, useEffect} from 'react';
import AddUser from './AddUser';
import ViewUser from './ViewUser';
import firebaseDB from '../../firebase';

const User = () => {
    const [userObj, setUserObj] = useState([]);

    const addEditUser = (userObj) => {
        console.log('add redit called', userObj);
        // firebaseDB.child('users').push(
        //     userObj,
        //     err => {
        //         if (err) { console.log('test error', err); }
        //     }
        // );
    };
    return (
        <div className="container" >
            <div className="form-wrapper" style={{ padding: "20px 20%" }}>
                <AddUser addEditUser={addEditUser} />
                <ViewUser />
            </div>
        </div>
    );
}
 
export default User;