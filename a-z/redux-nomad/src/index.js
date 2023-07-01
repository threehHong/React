import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// 첫번째 정리
/* 
// reducer() - createStore에 저장된 데이터를 수정하는 함수.
const reducer = () => {
  return "hello"
};

// createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(reducer); 
*/


/*********************************************  *********************************************/


// 두번째 정리(이걸로 암기하기)
/* 
// 2. reducer() - createStore 저장된 데이터를 수정하는 함수(reducer 함수명은 자유롭게 작성).
//    action - 함수를 부를 때 쓰는 두번째 parameter 혹은 argument
//           - reducer와 소통하기 위한 도구 
const reducer = (count = 0, action) => {
  if(action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }

};

// 1. createStore() - data를 저장하는 함수 + createStore()는 reducer()를 요구한다(store 변수명은 자유롭게 작성).
const store = createStore(reducer);
// console.log(store); // dispatch, subscribe, getState, replaceReduce

// 3. reducer에게 action을 보내는 방법
// store.dispatch({ type: "ADD" })
// store.dispatch({ type: "ADD" })
// store.dispatch({ type: "MINUS" })

const handleAdd = () => {
  store.dispatch({ type: "ADD" });
}
const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// 5. subscribe - store에 변화가 있을 때마다 호출되는 함수.
const onChange = () => {
  console.log(store.getState());
  number.innerText = store.getState();  
}
store.subscribe(onChange);

// 4. getState() - reducer의 데이터를 가져오는 함수
// console.log(store.getState());
 */


/*********************************************  *********************************************/


// 세번쨰 정리
// 2. reducer() - createStore 저장된 데이터를 수정하는 함수.
//    action - 함수를 부를 때 쓰는 두번째 parameter 혹은 argument
//           - countModifier와 소통하기 위한 도구
const countModifier = (count = 0, action) => {
  if(action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }

};


// 1. createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(countModifier);
// console.log(countStore); // dispatch, subscribe, getState, replaceReduce


// 3. countModifier에게 action을 보내는 방법
// countStore.dispatch({ type: "ADD" })
// countStore.dispatch({ type: "ADD" })
// countStore.dispatch({ type: "MINUS" })

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
}
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


// 5. subscribe - store에 변화가 있을 때마다 호출되는 함수.
const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();  
}

countStore.subscribe(onChange);


// 4. getState() - countModifier의 데이터를 가져오는 함수
// console.log(countStore.getState());
