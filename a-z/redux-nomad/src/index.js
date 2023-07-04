// index_todo_js_redux.js

import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
  return {
    // 여기서 ADD_TODO는 reducer에서 switch문에 참 거짓에 판별에 활용된다.
    type: ADD_TODO, 
    text
  }
}

const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}

const reducer = (state = [], action) => {
  console.log(state, action);

  switch(action.type) {
    // 입력되는 내용 하위에 표시
    // case ADD_TODO: return [...state, { text: action.text, id: Date.now() }];
    
    // 입력되는 내용이 상위에 표시

     // [{ text: action.text, id: Date.now() } ...state]; 이 부분 질문하기 - spread 연산자로 state를 하지 않을 경우 2개에서 리스트가 늘어나지 않는다.
     // state = [{ text: action.text, id: Date.now() } ...state]; 이렇게 적어야 하는 것 아닌가?
    case ADD_TODO: return [{ text: action.text, id: Date.now() }, ...state];

    case DELETE_TODO: return state.filter(todo => 
      todo.id !== parseInt(action.id)
    )
    default: return state;
  }
}

const store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteTodo = (e) => {
  // store.dispatch({ type: ADD_TODO, text});
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id))
}

const paintTodos = () => {
  const toDos = store.getState();
  
  console.log(toDos);

  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo)

    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintTodos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);

