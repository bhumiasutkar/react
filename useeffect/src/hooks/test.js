import React, { useEffect, useState } from "react";
import ChildCounter from './child';
import ContextProvider from "./context";

const CounterTest = () => {
    const [isCounter, setIsCounter] = useState(0);

    const hello = () => {
        console.log('hello');
    };

    useEffect(() => {
        hello();
    }, []);

    const increment = () => {
        setIsCounter(isCounter + 1);
    };
    const decrement = () => {
        setIsCounter(isCounter - 1);
    };

    return (
        <div>
            <ContextProvider>
                <button onClick={increment}> inc </button>
                <button onClick={decrement}> dec </button>
                <ChildCounter counter={isCounter} />
            </ContextProvider>
        </div>
    );
};

export default CounterTest;