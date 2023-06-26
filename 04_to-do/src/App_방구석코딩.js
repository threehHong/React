/* 
To Do App 
26강 이어서.
https://youtu.be/v_wMjBYNXI4
*/

import { useState } from 'react';

const TodoWriteForm = ({ addTodo:_addTodo }) => {
  // addTodo:_addTodo - 함수명을 addTodo에서 _addTodo로 바꾼것. 
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const addTodo = () => {
    _addTodo(newTodoTitle);
    setNewTodoTitle(''); 
    console.log("출력확인")
  }

  return (
    <div style={{ marginBottom: '15px' }}>
      <input
        type="text"
        placeholder='할일을 입력하세요'
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />

      &nbsp;

      <button onClick={addTodo}> add </button>
    </div>
  )
}

const TodoListItem = ({ todo, index, removeTodo:_removeTodo, modifyTodo:_modifyTodo }) => {

  const [editMode, setEditMode] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState(todo);

  const modifyTodo = () => {
    _modifyTodo(index, newTodoTitle);
    changeToReadMode();
  }

  const removeTodo = () => {
    _removeTodo(index);
  }

  const changeToEditMode = () => {
    setEditMode(true);
  }

  const changeToReadMode = () => {
    setNewTodoTitle(todo);
    setEditMode(false);
  }

  return (
    <li key={index}> &nbsp; 

      {editMode ? 
        <>
          <input type="text" placeholder='할일' value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)}/> &nbsp;
          <button onClick={modifyTodo}> 수정 완료 </button> &nbsp;
          <button onClick={changeToReadMode}> 수정 취소 </button>
        </>
        : 
          <>
            {todo} &nbsp;
            <button onClick={changeToEditMode} > 수정 </button>
          </>
        }
       &nbsp;
      <button onClick={removeTodo} > 삭제 </button>
    </li>
  )
}

const TodoList = ({ todos, removeTodo, modifyTodo }) => {
  return (
    <>
      <hr/>

      <div>
        <ul>
          {/* map에 index를 넣으면 자동적으로 숫자가 들어간다. */}
          {todos.map((todo, index) => (
            <TodoListItem  
              key={index} 
              index={index} 
              todo={todo} 
              removeTodo={removeTodo}
              modifyTodo={modifyTodo}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTitle) => {
    setTodos([...todos, newTitle]);
    console.log(todos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, _index) => (
      _index != index
    ))
    setTodos(newTodos);
  }

  const modifyTodo = (index, todo) => {
    const newTodos = todos.map((_todo, _index) => (
      _index != index ? _todo : todo
    ))
    setTodos(newTodos);
  }

  return (
    <div style={{ margin: '20px' }}>

      <TodoWriteForm 
        addTodo={addTodo} 
      />

      <TodoList todos={todos} removeTodo={removeTodo} modifyTodo={modifyTodo} />

    </div>
  );
}

export default App;
