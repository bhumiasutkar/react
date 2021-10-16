import React, {useState, useRef} from 'react';
import Input from '../FormElements/Input/Input';
import Button from '../FormElements/Button/Button'

const AddUser = (props) => {
    const emailRef = useRef();
    const userCreaedDate = new Date();
    const initialUserData = {
        Email: '', FName: '', LName: '', Conact: '', Department: '', Emploee_Id: '', Created: userCreaedDate, Status: true
    };
    const [values, setValues] = useState(initialUserData);
    const changeHandler = (e) => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values);
    }
    const submitUserHandler = (e) => {
        e.preventDefault();
        console.log('form submited');
        props.addEditUser(values)
    }
    return (        
            <form onSubmit={submitUserHandler} autoComplete="off">
            
                <Input label="Email" input={{ type: "email", id: "email", name: 'Email', require: 'required', className: "form-control", ref: { emailRef }, placeholder: 'Email', value: values.Email, onChange: changeHandler }} />
                    

                <Input label="First Name" input={{ type: "text", id: "Fname", name:'FName', require: 'required', className: "form-control", placeholder: 'First Name', value: values.Fname, onChange: changeHandler }} />
                
                <Input label="Last Name" input={{ type: "text", id: "lname", name:'LName', className: "form-control", require: 'required', value: values.Lname, onChange: changeHandler  }} />
                
                <Input label="Contact no" input={{ type: "number", id: "contNo", name:'Conact', className: "form-control", require: 'required', value: values.Conact, onChange: changeHandler }} />
                
                <Input label="Department" input={{ type: "text", id: "department", name:'Department', className:"form-control", require: 'required', value: values.Department, onChange: changeHandler }} />
                
                <Input label="Emp Id" input={{ type: "text", id: "emp-id", name:'Emploee_Id', className: "form-control", require: 'required', value: values.Emploee_Id, onChange: changeHandler }} />
                
                <Input label="Status" input={{ type: "hidden", id: "status", name:'Status', className: "form-control", value: values.Status, onChange: changeHandler}} />

                <Input label="Created on" input={{ type: "hidden", id: "created-date", name:'Created', className: "form-control", value: values.Created, onChange: changeHandler }} />
                
                <Input label="" input={{ type: "submit", id: "submit-user", className:"form-control", value: 'submit' }} />
                
            {/* <Button type="button" className="btn btn-primary" onClick={()=>{console.log('button clicked')}}> Submit </Button> */}
            
            </form>            
        )
};

export default AddUser;