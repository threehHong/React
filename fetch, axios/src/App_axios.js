// axios

/* 
추가정리 할 내용
1. 요청 옵션 관련해서는 추후 정리하기(method, mode 설정 관련).
2. async/await을 사용하므로써 코드를 쉽게 작성할 수 있고 가독성과 유지보수성을 높일 수 있다고 하는데 기능적인 특징 추후 알아보고 정리하기.
*/

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])

  /* 
  useEffect에서 의존성 배열인 []를 사용하지 않으면 useState인 setPosts에 계속 데이터가 담기면서
  App 컴포넌트를 계속해서 렌더링하여 성능에 안좋은 영향을 줄 수 있다(서버에 계속해서 데이터 요청). 
  따라서 useEfect() 내부에 axios를 사용 할 경우 의존성 배열을 사용하여 한번만 실행되도록 한다.
  */
  useEffect(() => {
    // 첫번째 방식
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(response => setPosts(response.data))
    // }).then(response => console.log(response))
    // response로 url에 있는 데이터를 받고 response.data로 전달 받은 데이터에 접근한다.


    // 두번째 방식
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //      .then(response => setPosts(response.data))

    // 세번째 방식(async, await)
    // fetchData()
  }, [])

  const fetchData = async () => {
    // try {} catch(error) {} 예외 처리 구문
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}> {post.title} </li>
      ))}
    </ul>
  );
}

export default App;
