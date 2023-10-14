import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/CounterAction";

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state)

  return (
    <div className='container'>
        <button onClick={() => dispatch(decrement())}className='minus'>-</button>
        <span className='number'>{count}</span>
        <button onClick={() => dispatch(increment())}className='plus'>+</button>
    </div>
  );
}

export default Counter;