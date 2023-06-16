/* 

1. 컴포넌트간의 데이터 전달 원리
리액트로 만든 앱은 여러개의 컴포넌트들로 구성된다.

최상위 컴포넌트(App 컴포넌트)에서 트리형태로 뻗어 나간다.

리액트에서 데이터의 흐름은 상위 컴포넌트에서 하위 컴포넌트로 props를 통해 차례차례 단계적으로 전달된다.


2. useContext(Context API)
그런데 여기서 수많은 컴포넌트들에 공통적으로 필요한 데이터가 있을 수 있다(ex. 현재 로그인된 사용자의 정보, 테마, 언어등이 있을 수 있다).

useContext(Context API)를 통해 App 컴포넌트 안에서 전역적으로 사용되는 데이터들을 여러 컴포넌트들 끼리 쉽게 공유할 수 있다.

컴포넌트 간의 상태(데이터)를 전역적으로 쉽게 공유할 수 있도록 해주는 기술.

import { ThemeContext } from './component/context/ThemeContext';

*/

import { useState } from 'react';
import './App.css';
import Page from './component/useContext/Page';
import { ThemeContext } from './component/context/ThemeContext';
 
function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // Provider 컴포넌트가 감싸는 모든 하위 컴포넌트는 Provider 컴포넌트의 value에 저장된 값에 접근할 수 있다
    <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page/>;
    </ThemeContext.Provider>
  )
  

}

export default App;


/* 
3. createContext, provider, consumer
createContext
Context 객체를 생성하는 함수(프로바이더와 컨슈머 생성).
Context 객체는 공유할 데이터를 담을 수 있는 공간.

Provider
전역적으로 사용될 데이터를 제공
컨텍스트의 값을 설정하는 역할
하위 컴포넌트에 값을 전달하기 위해 value prop을 사용
중첩된 컴포넌트에 사용할 수 있음
각각의 프로바이더는 독립적인 값을 제공

consumer
이 데이터를 사용하는 컴포넌트
컨텍스트의 값을 소비하는 역할
컨슈머는 프로바이더로부터 전달된 값을 사용하기 위해 프로바이더 컴포넌트를 찾아 올라 최상위 프로바이더의 값을 사용

Provider와 Consumer의 관계
프로바이더는 컨슈머 컴포넌트 트리를 감싸며, 컨슈머는 프로바이더로부터 제공되는 데이터에 접근할 수 있다.


4. Context 사용시 주의 사항
Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다. 
*/