import React from 'react';

function User({ user, onRemove, onToggle, onEdit }) {
    return ( 
        <div
            style={{
                border: "2px solid #000",
                margin: "10px 0",
                padding: "10px 5px"
            }}
        >
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black',
                    display: "block",
                }}
                onClick={() => onToggle(user.id)}
            > {user.username} </b> 
            
            <p style={
                {
                    fontWeight: "bold"
                }} > {user.email} </p>

            <button onClick={() => onEdit(user.id)}> 수정 </button>
            <button onClick={() => onRemove(user.id)}> 삭제 </button>
        </div>
    )
}

 
function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
          {users.map((user) => (
            <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove} 
                onToggle={onToggle}
            />
          ))}
        </div>
    );
}

export default UserList

