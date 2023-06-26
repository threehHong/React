import React, { useState } from 'react'

export default function List({ todo, setTodo }) {
  const [editItemId, setEditItemId] = useState(null);
  const [newTodo, setNewTodo] = useState();

  const handleClick = (id) => {
    let newTodoData = todo.filter(data => data.id !== id)
    setTodo(newTodoData);
  }

  const handleModify = (id, data) => {
    setEditItemId(id);
    setNewTodo(data);
  }

  const handleCancle = () => {
    setEditItemId(false);
  }

  const handleModifyChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleComplete = () => {
    const updatedTodo = todo.map(data => {
      if (data.id === editItemId) {
        // 이 밑에 구문 이해하기.
        return { ...data, title: newTodo };
      }
      return data;
    });
    setTodo(updatedTodo);
    setEditItemId(false);
  }

  return (
    <div>
        <ul>
            {todo.map((data, index) => (
            <li key={index} style={{ marginBottom: "10px"}}> 
          
                {editItemId === data.id ? 
                
                <>
                  <input type="text" value={newTodo} onChange={handleModifyChange} /> &nbsp;
                  <button onClick={handleCancle}> 취소 </button> &nbsp;
                  <button onClick={handleComplete}> 완료 </button>
                </>

                :

                <>
                  {data.title} &nbsp;
                  <button onClick={() => handleModify(data.id, data.title)}> 수정 </button> &nbsp;
                  <button onClick={() => handleClick(data.id)}> 삭제 </button>
                </>
                
                }
           
            </li>

            ))}
        </ul>
    </div>
  )
}
