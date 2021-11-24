import React, { useState, useLayoutEffect } from 'react';

const Effects = () => {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + 3 * 200);
        }
    }, [value]);


    // useEffect(() => {
    //     if (value === 0) {
    //         setValue(10 + 19 * 200);
    //     }
    // }, []);

    console.log('render', value);
    return (
        <button onClick={() => setValue(0)}>
            value: {value}
        </button>
    );
};

export default Effects;