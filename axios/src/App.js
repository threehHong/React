import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])

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
  })


  // 세번째 방식(async, await)
  useEffect(() => {
    fetchData()
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
