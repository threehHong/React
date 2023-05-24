import './App.css';
import React, { useState, memo, useMemo } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
    padding: 10px;
    border: 2px solid navy;
`;

// Child 컴포넌트를 memo로 감싸 props의 값이 변하지 않을 경우 App 컴포넌트가 렌더링 되어도 Child 컴포넌트를 렌더링 하지 않고 이전에 사용한 결과값을 재사용한다.
const Child = memo(({name}) => {
  console.log('자녀 컴포넌트 렌더링 완료');

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px', marginTop: '10px' }}> 
      <h3> 자녀 </h3>
      <p> 성 : {name.lastName} </p>
      <p> 이름 : {name.firstName} </p>
    </div>
  )
});

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('부모 컴포넌트 렌더링 완료');

  const name = useMemo(() => {
    return { 
      /* 
      1. lastName과 firstName에 특정 주소값이 부여되고 여기에 값이 저장되는데 이 주소값은 렌더링 될때마다 바뀐다 결과적으로 name의 props가 바뀌게되어 App 컴포넌트가 렌더링 되면 Child 컴포넌트도 다시 렌더링 된다.
      2. 이 경우 useMemo() hook을 사용하면 Child 컴포넌트의 재렌더링을 막을 수 있다. */
      lastName: '홍',
      firstName: '길동',
    }
  }, [])

  return (
    <Div>  
      <h2> 부모 </h2>
      <p> age : {parentAge} </p>
      <button onClick={incrementParentAge}> 부모 나이 증가 </button>

      <Child 
        name={name} 
      />
    </Div>
  );
}

export default App;
