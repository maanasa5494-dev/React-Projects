

import { createContext, useCallback, useEffect, useState } from 'react';
import './App.css';
import TrafficLights from './components/TrafficLights';
import Input from './components/Input';

export const MyContext = createContext();

function App() {
  const [state, setState] = useState({});
  useEffect(()=>{
    setTimeout(() => {
      console.log("done with 5 sec");
      setState({
        key: 1,
        key1: 2
      });
    }, 5000);
  }, []);

  const inputClicked = useCallback(($event)=> {
    console.log("input clicked", state);
  }, [state]);
  
  return <>
    {/* <MyContext.Provider value={state}>
      <TrafficLights></TrafficLights>
    </MyContext.Provider> */}
    <Input inputClick={inputClicked}></Input>
  </> 
}

export default App
