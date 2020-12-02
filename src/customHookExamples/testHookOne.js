import React, { useState, useEffect } from 'react';

function Comp(props) {
    const [state, setState] = useState({
      a: "",
      b: ""
    });
  
    //in spite this effect runs after a prop change
    //it will never take effect on a
    useEffect(() => {
      // first this will run with props as {a: "A", b: "B"} and state as {a: '', b:''}
      // and will put in queue the state changes as {a: 'A', b:''}
      // note that state changes of a will not happen immediately but will be queue and the next useEffect will get called
      console.log("Effect 2...." + props.a);
      setState({ ...state, a: props.a });
    }, [props.a]);
  
    useEffect(() => {
        // second this will run with props as {a: "A", b: "B"} and state as {a: '', b:''}
        // note that state has not changed yet
      // this will put in queue the state changes as {a: '', b:'B'}
      // and this will override the previous state changes that were in queue
      //there for state of a will never updated
      console.log("Effect 3...." + props.b);
      setState({ ...state, b: props.b });
    }, [props.b]);
  
    return (
      <div>
        <h1>{`A value: ${state.a}`}</h1>
        <h1>{`B value: ${state.b}`}</h1>
      </div>
    );
  }
  
  
  export default function TestHookOne() {
    const [state, setState] = useState({
      a: "A",
      b: "B",
      index: 0
    });
  
    //Imagine this as a user interaction
    //or eventually a result of an api call
    //Which sometimes could change a or b or both
    setTimeout(() => {
      const { index } = state;
      if (index % 2 === 0) {
        setState({ ...state, index: index + 1, a: `a${index}`, b: `b${index}` });
      } else {
        setState({ ...state, index: index + 1, b: `b${index}` });
      }
    }, 2000);
  
    return (
      <div className="App">
        <Comp a={state.a} b={state.b} index={state.index} />
      </div>
    );
  }