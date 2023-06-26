import { useState } from 'react';
import List from './component/List';
import Form from './component/Form';

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue ] = useState("");

  // 새로운 할 일 데이터
  let newTodo = {
    id: Date.now(),
    title: value,
    completed: false,
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 원래 있던 할 일에 새로운 할 일 추가
    setTodo([...todo, newTodo])
    setValue("");   
  }

  return (
    <div style={{ margin: '20px' }}>

      <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        
      <List todo={todo} setTodo={setTodo} />
        
    </div>
  );
}

export default App;
