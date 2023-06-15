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
              <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 bg-gray-100 border rounded'> 

                <div className='itmes-cneter' >
                  <input 
                    type="checkbox" 
                    defaultChecked={data.completed} 
                    onChange={() => handlCompleteChane(data.id)} /> {" "}
                    
                
                  <span className={data.completed ? "line-through" : "undefined"}> {data.title} </span>
                </div>
                
                
                <div className='items-center'>
                  <button onClick={() => handleClick(data.id)}> x </button> 
                </div>               
              
              </div>
            </div>
          ))}
        </div>
    )
}