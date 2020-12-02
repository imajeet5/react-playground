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
    let [state, setState] = useState({abc:'123'});
    console.log(state);
  
    useEffect(() => {
      setState((state) => ({...state, abc:'345'}));
    });
  
    return state;
  }

export function MyHook() {
  let state = useMyHook6();
  return (
    <div>
      <p></p>
    </div>
  );
}
