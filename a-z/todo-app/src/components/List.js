import React from 'react';

const List = React.memo(({
    id, 
    title, 
    completed, 
    todoData, 
    setTodoData, 
    provided, 
    snapshot,
    handleClick
}) => {
    const handlCompleteChane = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
            data.completed =! data.completed;
            }
            return data;
        })
            setTodoData(newTodoData);
    }


    return (
        <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 border rounded`}
        >
            <div className='itmes-cneter' >
                <input 
                type="checkbox" 
                defaultChecked={completed} 
                onChange={() => handlCompleteChane(id)} /> {" "}
                
            
                <span className={completed ? "line-through" : "undefined"}> {title} </span>
            </div>
            
            
            <div className='items-center'>
                <button onClick={() => handleClick(id)}> x </button> 
            </div>      

        </div>
    );
});

export default List;