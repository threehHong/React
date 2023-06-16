import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  
  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 1. 렌더링 마다 실행
  /* useEffect(() => {
    console.log('렌더링');
  }); */

  // 2. count 값이 변화될 때만 렌더링(마운트 or 배열안의 값이 변화될 떄만 실행)
  /* useEffect(() => {
    console.log('count가 변화될 떄만 렌더링');
  }, [count]); */

  // 3. name 값이 변화될 때만 렌더링(마운트 or 배열안의 값이 변화될 떄만 실행)
  /* useEffect(() => {
    console.log('name가 변화될 떄만 렌더링');
  }, [name]); */

  // 4. 맨처음 렌더링 될 때만 실행
  /* useEffect(() => {
    console.log('렌더링');
  }, []); */
  
  return (
    <div> 
      <button onClick={handleCountUpdate}> Update </button> 
      <span> count: {count} </span> <br/>

      <input type="text" value={name} onChange={handleInputChange} /> 
      <span> name: {name} </span>
    </div>
  );
}

export default App;
