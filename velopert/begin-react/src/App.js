import './App.css';
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <Wrapper>
      <UserList />

      <InputSample />

      <Counter />

      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />

      <div style={style}> {name} </div>
      <div className="gray-box"> </div>
    </Wrapper>
  );
}

export default App;