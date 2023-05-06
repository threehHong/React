/* 
정리
App.js 파일의 App 함수의 return() 내부에 html 코드를 작성하여 화면에 작성한 내용을 표시할 수 있다

App.js파일을 export하면 다른 파일에서 import를 통해 가져올 수 있다.

index.js파일은 다른 필요한 여러 데이터 그룹들을 import로 불러온다(인터넷 익스플로러랑 만나는 부분이라 생각하기?)

이렇게 불러온 데이터 그룹들을 index.js파일이 정리하여 render를 통해 작성한 내용을 인터넷 익스플로러에 전달한다.

*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* from './App';에서 App은 .js가 생략된 것 .은 현재 디렉토리를 의미 */ 
import App from './App';
import reportWebVitals from './reportWebVitals';

/* id='root'는 public/index.html파일에 있는 <div id="root"></div>를 의미 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* App은 위의 import App from './App';에서 APP을 가져오는 것(이 태그를 삭제 하면 라이브 서버 페이지 화면에 아무것도 나오지 않는다)  */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
