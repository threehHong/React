import './App.css';
import React, { useState, memo, useCallback } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
    padding: 10px;
    border: 2px solid navy;
`;

// Child 컴포넌트를 memo로 감싸 props의 값이 변하지 않을 경우 App 컴포넌트가 렌더링 되어도 Child 컴포넌트를 렌더링 하지 않고 이전에 사용한 결과값을 재사용한다.
const Child = memo(({ name, tellMe }) => {
  console.log('자녀 컴포넌트 렌더링 완료');

  return (
    <div style={{ border: '2px solid powderblue', padding: '10px', marginTop: '10px' }}> 
      <h3> 자녀 </h3>
      <p> 이름 : {name} </p>
      <button onClick={tellMe}> 엄마 나 사랑해? </button>
    </div>
  )
});

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('부모 컴포넌트 렌더링 완료');

  /* 
  1. tellMe에 저장된 함수에는 특정 주소값이 부여되고 이 주소값은 렌더링 될때마다 바뀐다 결과적으로 렌더링 될 때 마다 tellMe에 저장된 값이 바뀌어 App 컴포넌트가 렌더링 되면 Child 컴포넌트도 다시 렌더링 된다.
  2. 이 경우 useCallback() hook을 사용하면 Child 컴포넌트의 재렌더링을 막을 수 있다. */
  const tellMe = useCallback(() => {
    console.log('길동아 사랑해');
  }, []);

  return (
    <Div>  
      <h2> 부모 </h2>
      <p> age : {parentAge} </p>
      <button onClick={incrementParentAge}> 부모 나이 증가 </button>

      <Child 
        name={'홍길동'}
        tellMe={tellMe}
      />
    </Div>
  );
}

export default App;
