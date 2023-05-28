/* 
useReducer (상태 관리 hook)
여러개의 값을 가지는 복잡한 state를 다뤄야 할 떄 사용


Reducer
컴포넌트의 state를 업데이트 해준다.


Dispatch
Reducer에 state 업데이트를 위한 요청


Action
Reducer에 전달되는 데이터.


과정
Dispatch -> Action -> Reducer -> State
Dispatch(Action) -> Reducer(State, Action)


State 
컴포넌트 내부에 위치한 객체.
이 객체에 저장된 값이 변하면 자동으로 컴포넌트가 다시 렌더링된다. 
*/

import './App.css';
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
`;

const reducer = (state, action) => {
  console.log('reducer 실행', state, action);

  switch (action.type) {
    case 'deposit': return state + action.payload;
    case 'withdraw': return state - action.payload;
    default: return state;
  }

  // return state + action.payload; 
}

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  // meney에 0 저장(money는 reducer 함수의 매개변수인 state 값)

  return (
    <Div>  
      <h2> useReducer로 구현된 은행 </h2>
      <p> 잔고 : {money}원 </p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000" // 1000 단위로 바뀔 수 있게하는 코드
      >
      </input>
      <button
        onClick={() => {
          dispatch( {type: 'deposit', payload: number}); 
          /* 
          dispatch 함수를 호출하면 reducer 함수가 실행됨. 
          dispatch의 괄호 안에 있는 값은 reducer 함수의 매개변수인 action으로 전달
          */
        }}
      > 예금 </button>
      <button
        onClick={() => {
          dispatch( {type: 'withdraw', payload: number});
        }}
      > 출금 </button>
    </Div>
  );
}

export default App;
