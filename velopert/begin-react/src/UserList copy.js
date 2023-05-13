import React, { useEffect } from 'react';

function User({user, onRemove, onToggle}) {  
    return (
        <div>
            <b
              style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
              }}
              onClick={() => onToggle(user.id)}
            > 
              {user.username} 
            </b>
            &nbsp;
            <span> ({user.email}) </span>
            <button onClick={() => onRemove(user.id)}> 삭제 </button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    return (
      <div>
        {/* users를 user로 받아오는 것 */}

        {users.map(user => {
            return <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
        })}

        {/* <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} /> */}
      </div>
    );
  }
  
  export default UserList;

