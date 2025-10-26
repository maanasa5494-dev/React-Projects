

import './App.css';
import HooksComponent from './components/HooksComponent';
// import FormComponent from "./components/FormComponent";

function App() {
  
  console.log("app re-render")
  
  return <>
    {/* <FormComponent></FormComponent> */}
    <HooksComponent></HooksComponent>
  </> 
}

export default App
