import './App.css';
import React, { useState, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  const increaseCountState = () => { setCount(count + 1); }

  // const refContainer = useRef();

  return (
    <div>
      <p> State : {count} </p>
      <button onClick={increaseCountState}> State 올려 </button>
    </div>
  );
}

export default App;


/* 
useRef

const ref = useRef(value);
useRef(value);를 호출하면 ref 객체를 반환
ref 객체는 { current: value } 와 같다
useRef(value는)에서 괄호안의 value는 current에 저장됨
컴포넌트가 계속해서 렌더링 되어도 언마운트 되기 전까지는 값을 그대로 유지할 수 있음
current - 현재 참조하고 있는 Element


const ref = useRef("hi") -> {current: "hi"} -> ref.current = "hi"
const ref = useRef("hello") -> {current: "hello"} -> ref.current = "hello"
const ref = useRef("world") -> {current: "world"} -> ref.current = "world"


저장 공간으로서의 기능
Ref의 변화 -> No 렌더링 -> 변수들의 값 유지
State의 변화 -> 렌더링 -> Ref의 값 유지

DOM 요소에 접근 기능 
ref를 통해 DOM 요소에 접근 가능(Document.querySelector 생각하기).
ex. input을 클릭하지 않아도 포커스를 주고싶을 때.


*/

/* 
useState()가 변경되면 해당 컴포너트가 재 렌더링 된다.
*/