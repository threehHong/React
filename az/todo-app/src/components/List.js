import React from 'react'

export default function List( {todoData, setTodoData} ) {

    // props.todoData

    const handlCompleteChane = (id) => {
    let newTodoData = todoData.map(data => {
        if(data.id === id) {
        data.completed =! data.completed;
        }
        return data;
    })
        setTodoData(newTodoData);
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData)
    }

    return (
        <div>
            {todoData.map((data) => (
            <div key={data.id}>
              <p> 
                <input type="checkbox" defaultChecked={false} onChange={() => handlCompleteChane(data.id)} style={{ marginRight:"6px" }} />
                  {data.title}
                <button onClick={() => handleClick(data.id)}> x </button>
              </p>
            </div>
          ))}
        </div>
    )
}