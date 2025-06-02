import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
    const storeStates= useSelector((state) => state);

  console.log("my store states",storeStates)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700' onClick={() => dispatch(increment())}> + </button>
      <button className='mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700' onClick={() => dispatch(decrement())}> - </button>
      <button className='mx-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700' onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
}

export default Counter;
