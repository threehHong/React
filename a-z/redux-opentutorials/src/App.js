// Redux를 사용한 방식 ()

import React, { useState } from 'react';
import './style.css';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1> Root </h1>
      <div id="grid"> 
        <Left1 number={number} />
        <Right1 />
      </div>
    </div>
  );
}

export default App;

// Left component
function Left1(props) {
  return (
    <div>
      <h1> Left1 : </h1>
      <Left2 />
    </div>
  )
}

function Left2(props) {
  return (
    <div>
      <h1> Left2 : </h1>
      <Left3 />
    </div>
  )
}

function Left3(props) {
  return (
    <div>
      <h1> Left3 :  </h1>
    </div>
  )
}

// Right component
function Right1(props) {
  return (
    <div>
      <h1> Right1 </h1>
      <Right2 />
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h1> Right2 </h1>
      <Right3 />
    </div>
  )
}

function Right3(props) {
  return (
    <div>
      <h1> Right3 </h1>
      <input 
        type="button"
        value="+"
        onClick={() => {
          
        }}
      />
    </div>
  )
}