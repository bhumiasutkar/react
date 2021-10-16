import React, { useEffect, useState } from "react";
import firebaseDB from '../../firebase';


const ViewUser = (props) => {
    const [userObj, setUserObj] = useState([]);
    const ref = firebaseDB.collection('users');

    const viewUserData = () => {
        ref.onSnapshot((el) => {
            const items = [];
            el.forEach(doc => {
                items.push(doc.data());
            });
            setUserObj(items);
        });        
    }

    useEffect(() => {
        viewUserData();
    }, [])

   
    return (
        <div className="container" >
            <div className="form-wrapper" style={{padding: "20px 0"}}>
               <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Emp ID</th>
                            <th>Status</th>
                            <th>Created on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userObj.map(el => {
                               
                                let userStatus = el.Status;
                                 console.log(userStatus)
                                return (
                                    <tr key={()=> Math.random()}>                                    
                                        <td>{el.FName} {el.LName }</td>
                                        <td>{el.Department}</td>
                                        <td>{el.Email}</td>
                                        <td>{el.Phone}</td>
                                        <td>{el.EmployeeID}</td>
                                        <td>{el.Status}</td>
                                    </tr>
                                )                                   
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
      );
}
 
export default ViewUser;