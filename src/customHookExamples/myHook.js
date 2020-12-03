import React, { useState, useEffect } from 'react';

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

function useMyHook1(num) {
  let [state, setState] = useState(num);
  console.log(state);

  useEffect(() => {
    setState(++state);
  });

  return state;
}

function useMyHook3(num) {
  let [state, setState] = useState(num);
  console.log(state);

  useEffect(() => {
    setState(++state);
  }, [state]);

  return state;
}
function useMyHook4(num) {
  let [state, setState] = useState(num);
  console.log(state);

  useEffect(() => {
    setState((state) => ++state);
  });

  return state;
}
function useMyHook5(num) {
  let [state, setState] = useState(num);
  console.log(state);

  useEffect(() => {
    setState((state) => ++state);
  }, [setState]);

  return state;
}
function useMyHook6(num) {
  let [state, setState] = useState({ abc: '123' });
  console.log(state);

  useEffect(() => {
    setState((state) => ({ ...state, abc: '345' }));
  });

  return state;
}

function useMyHook7(num) {
  let [count, setCount] = useState(num);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {      
      clearInterval(id);
    };
  });

  return count;
}

export function MyHook() {
  let state = useMyHook7(1);
  return (
    <div>
      <p>{state}</p>
    </div>
  );
}
