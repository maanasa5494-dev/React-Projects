import './App.css';
import Header from './components/Header';
import StyledComponents from './components/StyledComponents';

function App() {

  const child1 =  <div>Hi Children1!!</div>;
  const child2 =  <div>Hi Children2!!</div>
  return <><Header title="Title 1" id="header1" abc="efg" igh="dhv" backgroundColor="white" padding={4}>
  </Header>
  <Header title="Title 2" child2={child2} backgroundColor="blue" padding={8}>{child1}</Header>
  <><StyledComponents></StyledComponents></></>;
}

export default App
