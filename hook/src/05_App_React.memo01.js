/* 
React.memo(컴포넌트를 메모이제이션?)

1. HOC(고차 컴포넌트)
어떤 컴포넌트를 받아 최적화된 새로운 컴포넌트로 반환해 주는 컴포넌트(UI나 기능적으로 모두 같지만 최적화된 컴포넌트로 반환)

React.memo는 리액트에서 제공하는 고차 컴포넌트 중 하나


2. 사용 주의사항
값을 재활용하기 위해 메모리를 사용하는 것이므로 꼭 필요할 때만 사용하기.

컴포넌트가 같은 props로 자주 렌더링 될 때 사용
복잡한 로직을 처리하는 컴포넌트를 반복해서 렌더링 할 때 사용
(이 외의 상황일 경우 왼만하면 사용하지 않는다)


3. 원리
React.memo는 오직 props 변화에만 의존하는 최적화 방법.

Prop Check를 통해 props에 변화가 있으면 렌더링을 하고 그렇지 않을 경우 기존에 렌더링된 내용을 재사용한다.


4. memo - memoization
계산해 놓은 값을 메모리에 저장하고 필요할 때 마다 가져와 사용하는 기법
최적화 기법에 사용되는 개념. 

*/

import './App.css';
import React, { useState, memo } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
    padding: 10px;
    border: 2px solid navy;
`;

// Child 컴포넌트를 memo로 감싸 props의 값이 변하지 않을 경우 App 컴포넌트가 렌더링 되어도 Child 컴포넌트를 렌더링 하지 않고 이전에 사용한 결과값을 재사용한다.
const Child = memo(({name, age}) => {
  console.log('자녀 컴포넌트 렌더링 완료');

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px', marginTop: '10px' }}> 
      <h3> 자녀 </h3>
      <p> name : {name} </p>
      <p> age : {age} </p>
    </div>
  )
});

function App() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  }

  console.log('부모 컴포넌트 렌더링 완료');

  return (
    <Div>  
      <h2> 부모 </h2>
      <p> age : {parentAge} </p>
      <button onClick={incrementParentAge}> 부모 나이 증가 </button>
      <button onClick={incrementChildAge}> 자녀 나이 증가 </button>

      <Child name={'홍길동'} age={childAge} />
    </Div>
  );
}

export default App;
