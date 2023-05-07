/* 1. Router란?
      사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 기술 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// 라우터 구현을 위해 import해야 하는 것들
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2> Home </h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2> Topics </h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2> Contact </h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    /* 2. BrowserRouter
          react-router-dom을 적용하고 싶은 컴포넌트의 최상위 컴포넌트에 감싸주는 wrapper 컴포넌트. */
    <BrowserRouter>
      <div> 
        <h1> React Router DOM example </h1>

    {/* 4. Link
           Link 컴포넌트와 to 속성을 통해 아래와 같은 구조로 새로고침 없이 페이지 전환 구현을 할 수 있다. */}
        <ul>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/topics"> Topics </Link> </li>
          <li> <Link to="/contact"> Contact </Link> </li>
        </ul>

    {/* 3. Routes, Route 
           라우팅할 대상 컴포넌트를 Routes와 Route를 통해 아래와 같은 구조로 만들어야 한다 
           (여기서 path 속성에 추가한 경로로 URL이 지정되면 element 속성에 입력된 컴포넌트가 화면에 표시된다) */}
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/topics" element={<Topics />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App /> 
  </React.StrictMode>
);

reportWebVitals();
