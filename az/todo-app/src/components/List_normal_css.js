import React from 'react'

export default function List( {todoData, setTodoData} ) {

    // props.todoData

    const btnStyle = {
        color: "#000",
        fontWeight: "bold",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    }

    const handlCompleteChane = (id) => {
    let newTodoData = todoData.map(data => {
        if(data.id === id) {
        data.completed =! data.completed;
        }
        return data;
    })
        setTodoData(newTodoData);
    }

    // 리스트 아래 점 선 그어지게 하는 함수
    const getStyle = (completed) => {
        return {
        padding: "10px",
        borderBottom: "1px #ccc dotted",
        textDecoration: completed ? 'line-through' : 'none',
        }
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData)
    }

    return (
        <div>
            {todoData.map((data) => (
            <div style={getStyle(data.completed)} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={false} onChange={() => handlCompleteChane(data.id)} style={{ marginRight:"6px" }} />
                  {data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}> x </button>
              </p>
            </div>
          ))}
        </div>
    )
}