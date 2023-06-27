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
        return { ...data, title: newTodo };
        /* 
        구문 설명
        editItemId과 일치하는 data 객체를 찾아서 해당 객체의 title 속성을 newTodo로 업데이트한 새로운 객체를 반환하는 구문
        결과적으로 다른 객체들은 그대로 있고 반환된 새로운 객체만 업데이트된 updatedTodo 배열을 생성.
        */
      }

      return data;
    });
    setTodo(updatedTodo);
    setEditItemId(false);
  }

  const toggleCompleteLine = (id) => {
    const updatedTodo = todo.map(data => {
      if (data.id === id) {
        return { ...data, completed: !data.completed}
      }
      return data;
    })

    setTodo(updatedTodo);
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
                  <span onClick={() => toggleCompleteLine(data.id)} style={{ textDecoration: data.completed ? 'line-through' : 'none' }} > {data.title} </span> &nbsp;
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
