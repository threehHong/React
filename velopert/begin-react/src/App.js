import React, { useRef, useState } from 'react';

import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({ 
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState ([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gamil.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직

    const user = {
      id: nextId.current,
      username,
      email
    };

    /* console.log(user.username, user.email); */

    /* setUsers([...users, user]); */ // 이 부분 탐구 및 정리하기.
    setUsers(users.concat(user)); // setUsers([...users, user]); 와 같은 내용

    setInputs({
      username: '',
      email: ''
    })

    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id인 것을 제거함.
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user 
        // 클릭한 users 객체의 id 번호와 users 객체의 id가 일치하면 대괄호 내용 실행
        // user.active가 false일 경우 true로 바꿔줌
      )
    );
  }

  return (
    <div
      style={{padding: '20px'}}
    >
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  )
}

export default App;

