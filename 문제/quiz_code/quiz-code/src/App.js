import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App;


/* 

위 코드에서 다음과 같은 문제를 해결해보세요:

초기 상태로 설정되는 count의 값은 무엇인가요?
increment 함수는 어떤 역할을 하나요?
decrement 함수는 어떤 역할을 하나요?
useState 훅에서 반환되는 배열의 두 번째 요소는 어떤 함수인가요?
버튼 클릭 시 count 값은 어떻게 업데이트되나요?
퀴즈의 답은 다음과 같습니다:

초기 상태로 설정되는 count의 값은 0입니다.
increment 함수는 count 값을 1 증가시키는 역할을 합니다.
decrement 함수는 count 값을 1 감소시키는 역할을 합니다.
useState 훅에서 반환되는 배열의 두 번째 요소는 count 값을 업데이트하는 setCount 함수입니다.
버튼 클릭 시 setCount 함수를 호출하여 count 값을 업데이트합니다. increment 함수는 count 값을 1 증가시키고, decrement 함수는 count 값을 1 감소시킵니다.
위 문제를 통해 useState를 활용한 상태 관리와 상태 업데이트 방법에 대해 이해해볼 수 있습니다.

*/