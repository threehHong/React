import { useState } from 'react';

const TodoWriteForm = ({ newTodoTitle, setNewTodoTitle, addTodo }) => {
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

const TodoListItem = ({ todo, index }) => {
  return (
    <li key={index}> {todo} </li>
  )
}

const TodoList = ({ todos }) => {
  return (
    <>
      <hr/>

      <div>
        <ul>
          {/* map에 index를 넣으면 자동적으로 숫자가 들어간다. */}
          {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </>
  )
}

function App() {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, newTodoTitle]);
    console.log(todos);
    setNewTodoTitle('');
  }

  return (
    <div style={{ margin: '20px' }}>

      <TodoWriteForm newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} addTodo={addTodo} />

      <TodoList todos={todos} />

    </div>
  );
}

export default App;
