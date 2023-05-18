/* 
1. useMemo  
컴포넌트 내부에서 계산된 결과값을 메모리에 저장해서 컴포넌트가 반복적으로 렌더링 되어도 다시 계산하지 않고 저장된 메모리에서 꺼내와 재사용하게 해주는 hook(컴포넌트 최적화에 사용되는 Hook).
        
값을 재활용하기 위해 메모리를 사용하는 것이므로 꼭 필요할 때만 사용하기


2. Memoization
특정 값을 리턴하는 함수를 반복적으로 호출 할 때 해당 값을 메모리에 저장해서
필요할 때 함수를 호출 하지 않고 메모리에서 꺼내 사용하는 방법.
or 
맨 처음 계산한 값을 캐시에 저장하고 필요할 때 마다 캐시에서 꺼내 사용하는 방법


3. 
함수형 컴포넌트는 함수를 의미
렌더링은 함수형 컴포넌트를 호출하는 것.
렌더링 될 때 마다 컴포넌트 내부의 변수는 초기화 된다.


4. useMemo의 구조
const value = useMemo(() => {
    return calculate();
}, [item]);

useMemo의 콜백 함수가 리턴하는 값이 렌더링 되어도 다시 계산하지 않고 재사용하게 하는 값.

[item]배열에 저장된 값이 업데이트 되면 useMemo의 콜백 함수를 호출해서 value에 저장.

[]와 같이 빈 배열일 경우 처음 렌더링시 계산된 결과값만 호출한다.
*/

import './App.css';
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-left: 20px;
`;

const hardCalculate = (number) => {
    console.log('어려운 계산')
    for(let i = 0; i<999999999; i++) {} // 생각하는 시간(계산하는 시간), 이로인해 input 태그의 상하 화살표 클릭시 숫자 증가에 시간이 걸린다.
    return number + 10000;   
};


const easyCalculate = (number) => {
    console.log('쉬운 계산')
    return number + 1;   
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]); // hardNumber의 값이 변경되지 않으면 hardSum의 값을 재사용하고, hardNumber가 변경되었을 때만 hardCalculate(hardNumber);를 호출하여 hardSum에 저장한다.
  const easySum = easyCalculate(easyNumber);

  return (
    <Div> 
        <h3> 어려운 계산기 </h3>
        <input 
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <span> + 10000 = {hardSum} </span>
        

        {/* 1. easyCalculate에서 for(let i = 0; i<999999999; i++) {}와 같은 복잡한 계산식이 없어도 input 태그의 상하 화살표 클릭시
            App 컴포넌트가 재실행 되므로 hardCalculate 함수가 호출되어 쉬운 계산기 결과 값 출력도 시간이 걸린다 
            이 때 사용되는 hook이 바로 useMemo이다.

            2. hardSum을 useMemo로 처리해주면 App 컴포넌트가 다시 렌더링 되어도 hardSum에 저장된 값만 불러오므로 쉬운 계산기의 숫자 증가 출력에 딜레이가 없다. */}
        <h3> 쉬운 계산기 </h3>
        <input 
            type="number"
            value={easyNumber}
            onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <span> + 1 = {easySum} </span>
    </Div>
  );
}

export default App;

