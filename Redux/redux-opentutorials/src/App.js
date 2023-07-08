// Redux를 사용한 방식 ()

/* 
1. Provider
- state를 제공할 component들을 감싸준다.
- 속성으로 store={store}를 넣어줘야 한다
  대괄호 안의 store는 createStore(reducer)를 담고 있는 변수
- Provider 내부에 있는 컴포넌트들은 store를 사용할 수 있게 된다

2. useSelector
useSelector - store에 저장된 state 값에 접근 할 수 있게 해주는 함수

3. useDispatch
useDispatch - reducer함수의 매개변수인 action에 데이터를 보내는 함수

*/

import React, { useState } from 'react';
import './style.css';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1
    }
  }

  const newState = { ...currentState };

  if(action.type === 'PLUS') {
    newState.number++;
  }

  return newState;

}


const store = createStore(reducer);

function App() {
  /* const [number, setNumber] = useState(1); */

  return (
    <div id="container">
      <h1> Root </h1>
      <div id="grid"> 
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
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
  console.log('2');
  
  return (
    <div>
      <h1> Left2 : </h1>
      <Left3 />
    </div>
  )
}

function Left3(props) {
  console.log('3');

  // useSelector - store에 저장된 state 값에 접근 할 수 있게 해주는 함수
  const number = useSelector(state => state.number);

  return (
    <div>
      <h1> Left3 : {number} </h1>
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

  // useDispatch - reducer함수의 매개변수인 action에 데이터를 보내는 함수
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Right3 </h1>
      <input 
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'PLUS' })
        }}
      />
    </div>
  )
}