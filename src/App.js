import React from 'react';

import './App.css';

import Wait from './customHookExamples/useWait';
import WindowDimensions from './customHookExamples/useWindowDimensions';
import {LocalStorageExample} from './customHookExamples/useLocalStorageHook';
import { MyHook } from "./customHookExamples/myHook";
import TestHookOne from "./customHookExamples/testHookOne";
import Fetch from './customHookExamples/useFetch'


function App() {
 
  return (
    <div className="App">
     
     
      <Fetch/>
   
    </div>
  );
}

export default App;

/**
 *  <Wait />
      <WindowDimensions />
      <LocalStorageExample/>
       <TestHookOne/>
 */