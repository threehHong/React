import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 2.
const reducer = (count = 0, action) => {
  if(action.type === "plus") {
    return count = count + 1;
  } else if (action.type === "Minus") {
    return count = count - 1;
  } else {
    return count;
  }
}

// 1.
const store = createStore(reducer);

// 3. 
const handlePlus = () => {
  store.dispatch({ type: "plus" });
}
const handleMinus = () => {
  store.dispatch({ type: "Minus" });
}

add.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);

const onChange = () => {
  console.log(store.getState());
  number.innerText = store.getState();
}

store.subscribe(onChange);


