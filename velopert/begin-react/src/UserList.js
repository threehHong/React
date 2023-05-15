import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black' // user.active의 값이 true이면 green 아니면 black
        }}
        onClick = {() => onToggle(user.id)}
      > {user.username} </b> 
      <span> ({user.email}) </span>
      <button onClick={() => onRemove(user.id)}> 삭제 </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default UserList;