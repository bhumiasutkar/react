import React, { useEffect } from 'react';

function CompB () {
    useEffect(() => {
        console.log("component B");
        return (console.log("component B"));
    }, []);

    return (
        <div>
            <h1>Component B</h1>

        </div>
    );
}

export default CompB;