import React, { } from 'react';

function CompC () {
    // const dispatch = useDispatch();

    // const setName = (data) => {
    //     return {
    //         type: "add",
    //         payload: data
    //     };
    // };

    // const inputReducer = (state, action) => {
    //     switch (action.type) {
    //         case "add":
    //             return {

    //             };
    //             break;
    //         default:
    //             break;
    //     }
    // };

    const clickHandle = (e) => {
        const inputVal = e.target.value;
        //dispatch()
        console.log(inputVal);
    };

    return (
        <div>
            <h1>Component C</h1>
            <input name="" value="" onClick={e => clickHandle(e)} />
        </div>
    );
}

export default CompC;