import React from 'react';
import Counter from '../../hooks/test';
import ThemeButton from './../themes/ThemeButton';

function TestPage () {
    return (
        <div>
            <h1>Test Page</h1>
            <Counter />
            <ThemeButton />
        </div>
    );
}

export default TestPage;