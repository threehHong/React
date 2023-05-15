// useState, useRef

import './App.css';
import React, { useState, useRef, useEffect } from 'react';


function App() {
  // 1. useRef(변수 관리)
  /* const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef);

  const increaseCountState = () => { setCount(count + 1); }
  const increaseCountRef = () => { 
    countRef.current ++;
    console.log("Ref : ", countRef.current);
  } */


  // 2. useRef(변수 관리)
  /* const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const increaseRef = () => {
    countRef.current ++;
    console.log("Ref : ", countRef.current);
  }

  const increaseVar = () => {
    countVar ++;
    console.log("Var : ", countVar);
  }

  const printResults = () => {
    console.log(`ref : ${countRef.current}, var : ${countVar}`)
  } */


  // 3. useRef(변수 관리)
  /* const [count, setCount] = useState(1);
  const renderCount = useRef(0);


  useEffect(() => { // useEffect 렌더링 될 때 마다 실행되는 훅
    console.log('렌더링', renderCount.current);
    renderCount.current = renderCount.current + 1;
  }) */


  // 4. useRef(DOM 요소에 접근)
  /* const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }) */

  return (
    <div> 
      {/* 1. useRef(변수 관리) */}
      {/* <p> State : {count} </p>
      <p> Ref : {countRef.current} </p>
      <button onClick={increaseCountState}> State 올려 </button>
      <button onClick={increaseCountRef}> Ref 올려 </button> */}


      {/* 2. useRef(변수 관리) */}
      {/* <p> Ref : {countRef.current} </p>
      <p> Var : {countVar} </p>
      <button onClick={doRendering}> 렌더 </button>
      <button onClick={increaseRef}> Ref 올려 </button>
      <button onClick={increaseVar}> Var 올려 </button>
      <button onClick={printResults}> Ref Var 값 출력 </button> */}


      {/* 3. useRef(변수 관리) */}
      {/* <p> Count: {count} </p>
      <button onClick={() => setCount(count + 1)}> 올려 </button> */}


      {/* 4. useRef(DOM 요소에 접근) - 접근하고자 하는 태그 속성으로 ref={}를 준다 */}
      {/* <input type="text" placeholder='username' ref={inputRef}/> 
      <button> 로그인 </button> */}
    </div>
  );
}

export default App;


/* 
1. useRef
- const ref = useRef(value);
  useRef(value);를 호출하면 ref 객체를 반환
  ref 객체는 ref = { current: value } 와 같다. 따라서 ref.current로 입력된 값을 불러오거나 저장할 수 있다.


- ref에 값을 저장하면 값은 저장되지만 렌더링 되지 않는다(증가하는 값을 계속해서 화면에 보여주지 않아도 될 경우 useState 대신 useRef를 사용하여
  성능에 도움을 줄 수 있다).
 

- const ref = useRef("hi") -> {current: "hi"} (ref 콘솔 출력시 나오는 내용) -> ref.current = "hi"
  const ref = useRef("hello") -> {current: "hello"} -> ref.current = "hello"
  const ref = useRef("world") -> {current: "world"} -> ref.current = "world"


- 저장 공간으로서의 기능(변수 관리)
  Ref의 변화 -> No 렌더링 -> 변수들의 값 유지
  State의 변화 -> 렌더링 -> Ref의 값 유지(컴포넌트 마운트 해지 전까지)


- DOM 요소에 접근 기능 
  ref를 통해 DOM 요소에 접근 가능(Document.querySelector 생각하기).
  ex. input을 클릭하지 않아도 포커스를 주고싶을 때.


2. useRef(DOM 요소에 접근)
- current - 현재 참조하고 있는 Element


3. 기타
- useState()가 변경되면 해당 컴포너트가 재 렌더링 된다.

*/
