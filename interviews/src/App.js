import "./App.css";
import React, {useEffect, useState} from 'react'
import Counter from "./components/Counter";
import ClassComponent from './components/ClassCount';
import Input from './components/Input'

function App () {
  const [count, setCount] = useState(0);
  let initialCunt = 0;
  const reset = () => {
    setCount(initialCunt)
  }
  const incrementHandler = (i) => {
    setCount((prev)=> count + 1)
  };
  const decreaseHandler = (i) => {
    setCount((prev)=> count - 1)
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
  });

  return <>
    <ClassComponent />
    <Counter countIncrease={incrementHandler} countDecrease={decreaseHandler} count={count} reset={reset} />
    <Counter countIncrease={incrementHandler} countDecrease={decreaseHandler} count={count} reset={reset} />
    <Input />
  </>;
}

export default App;
