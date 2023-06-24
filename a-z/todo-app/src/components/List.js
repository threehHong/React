import React, { useState } from 'react';

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

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handlCompleteChane = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
            data.completed =! data.completed;
            }
            return data;
        })
            setTodoData(newTodoData);
            localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    const handleEditChange = (event) => {
        setEditedTitle(event.target.value);
    }

    const handleSubmit = (evnet) => {
        evnet.preventDefault();

        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.title = editedTitle
            }
            return data;
        })
        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData)); 
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <div 
                className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-500 border rounded`}
            >
                <div className='itmes-cneter' >
                    <form onSubmit={handleSubmit}>
                        <input 
                        value={editedTitle}
                        onChange={handleEditChange}
                        className='w-full px-3 mr-4 text-gray-500 rounded'
                        />
                    </form>
                    
                    {/* <span className={completed ? "line-through" : "undefined"}> {title} </span> */}
                </div>
                
                
                <div className='items-center'>
                    <button
                        className='px-4 py-2 float-right' 
                        onClick={() => setIsEditing(false)}> x </button> 
                    <button 
                        onClick={handleSubmit}
                        className='px-4 py-2 float-right'
                        type='submit'
                        > save </button> 
                </div>      
    
            </div>    
        )
    } else {
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
                    <button
                        className='px-4 py-2 float-right' 
                        onClick={() => handleClick(id)}> x </button> 
                    <button 
                        className='px-4 py-2 float-right'
                        onClick={() => setIsEditing(true)}> edit </button> 
                </div>      
    
            </div>
        );
    }

});

export default List;