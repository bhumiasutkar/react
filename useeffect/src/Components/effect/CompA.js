import React, { useEffect } from 'react';
import CompB from './CompB';

function CompA () {
    useEffect(() => {
        return (console.log("component A"));

    }, []);

    return (
        <div>
            <h1>Component A</h1>
            <CompB />
        </div>
    );
}

export default CompA;