import { useEffect, useState } from 'react';
import Counter from "./components/Counter";
import ClassComponent from './components/ClassCount';
//import Input from './components/Input';
import Effects from './components/Effects';
import MyStore from "./reduxTest/main";
import ReactTS from './reactTS/ReactTS';

const App = () => {
    const [count, setCount] = useState(0);
    let initialCunt = 0;
    const reset = () => {
        setCount(initialCunt);
    };
    const incrementHandler = () => {
        setCount((prev) => count + 1);
    };
    const decreaseHandler = () => {
        setCount((prev) => count - 1);
    };

    useEffect(() => {
        document.title = `You have clicked ${count} times`;
    });

    return (
        <div>
            <ClassComponent />
            <Counter countIncrease={incrementHandler} countDecrease={decreaseHandler} count={count} reset={reset} />
            <Effects />
            <MyStore />
            ***React typescript***
            <ReactTS />
        </div>
    );
}

export default App;