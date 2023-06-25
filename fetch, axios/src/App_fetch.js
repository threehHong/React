// fetch

/* 
추가정리 할 내용
1. 요청 옵션 관련해서는 추후 정리하기(method, mode 설정 관련).
2. async/await을 사용하므로써 코드를 쉽게 작성할 수 있고 가독성과 유지보수성을 높일 수 있다고 하는데 기능적인 특징 추후 알아보고 정리하기.
*/

import React, { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  /* 
  useEffect에서 의존성 배열인 []를 사용하지 않으면 useState인 setUsers에 계속 데이터가 담기면서
  App 컴포넌트를 계속해서 렌더링하여 성능에 안좋은 영향을 줄 수 있다(서버에 계속해서 데이터 요청). 
  따라서 useEfect() 내부에 fetch를 사용 할 경우 의존성 배열을 사용하여 한번만 실행되도록 한다.
  */
  useEffect(() => {
    // 첫번째 방식
    /* fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      setUsers(data);
    }); */

    // 두번째 방식
    /* fetchData(); */

    // 세번째 방식(async/await)
    fetchData();
    
  }, [])

  // 두번째 방식
  /* const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      setUsers(data);
    });
  } */

  // 세번째 방식(async/await)
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if(response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } else {
        console.error('데이터를 가져오는데 실패했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* 
      함수 실행문 바깥을 소괄호()로 감쌀 경우 return문을 작성하지 않아도 return이 된다
                        중괄호{}로 감쌀 경우 return문이 없다면 return 값을 반환하지 않는다.
      */}
      {users.map((user) => (
        <p key={user.id}> {user.name} </p>
        ))}
    </div>
  )
}

export default App;