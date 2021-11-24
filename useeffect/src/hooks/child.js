import React, { useContext } from 'react';
import { MyContext } from './context';

function ChildCounter (props) {
    const ctx = useContext(MyContext);
    const { counter } = props;
    return (
        <div>
            <p>my name is {ctx.name}</p>
            Counter is {counter}
        </div>
    );
}

export default ChildCounter;