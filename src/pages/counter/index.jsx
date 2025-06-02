//Component using Redux

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/slices/counterSlice';
import { Navbar } from '@/layout/Navbar';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const storeStates = useSelector((state) => state);

  console.log("my store states", storeStates)
  const dispatch = useDispatch();

  return (
    <div className='bg-gray-100 min-h-screen pt-15 p-3 w-full flex flex-col justify-center items-center gap-2'>
      <Navbar />
      <h1 className='text-xl font-bold m-2 my-4'>Counter: {count}</h1>
      <div>
        <button className='mx-2 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600' onClick={() => dispatch(increment())}> + </button>
        <button className='mx-2 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600' onClick={() => dispatch(decrement())}> - </button>
        <button className='mx-7 px-4 py-2 bg-red-400 text-white rounded hover:bg-blue-600' onClick={() => dispatch(reset())}> Reset </button>
      </div>

    </div>
  );
}

export default Counter;
