import React, { useState } from 'react';

const Input = (props) => {
    const [name, setName] = useState({firstName: '', lastName: ''});

    const firstNameHandler = (e) => {
        setName({...name, firstName: e.target.value});
    }
    const lastNameHandler = (e) => {
        setName({ ...name, lastName: e.target.value });
    }

    return (
        <div>
            <form>
                <input type="text" onChange={firstNameHandler} value={name.firstName} />
                 <input type="text" onChange={lastNameHandler} value={name.lastName}/>
            </form>
            <p>I am {name.firstName} {name.lastName}</p>
        </div>
    );
};

export default Input;