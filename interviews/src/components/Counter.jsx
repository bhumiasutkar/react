import React from 'react';

function Counter (props) {
    //const [countIncrease, countDecrease, count] = props;
    return (
        <div className="funcDiv">
            <h3> functional component </h3>
            <div>
                <p>Count is: {props.count}</p>
                <button onClick={props.countIncrease}>+</button>
                <button onClick={props.countDecrease}>-</button>
                <button onClick={props.reset}>Reset</button>
            </div>
        </div>

    );
}
export default Counter;