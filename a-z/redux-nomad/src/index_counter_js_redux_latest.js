// index_counter_js_redux_latest.js

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = 'ADD';
const MINUS = 'MINUS';

// 첫번째 정리
/* 
// 2. reducer() - createStore 저장된 데이터를 수정하는 함수(reducer 함수명은 자유롭게 작성).
//              - reducer 함수 내부 로직에는 주로 switch문을 사용한다.
//    action - 함수를 부를 때 쓰는 두번째 parameter 혹은 argument
//           - store.dispatch({ type: "MINUS" });를 통해 전달되는 데이터를 전달받는 매개 변수.
//           - reducer와 소통하기 위한 도구 
const reducer = (count = 0, action) => {
  switch(action.type) {
    // count + 1만 하여도 count에 count + 1 값이 저장 되는 것은 const store = createStore(reducer); 에서
    // reducer의 반환반환 받은 값을 createStore 함수 내부에 있는 로직을 통해 count + 1 값이 count에 저장되는 것으로 생각하기.
    case "ADD": return count + 1;
    case "MINUS": return count - 1;
    default: return count;
  }
};

// 1. createStore() - data를 저장하는 함수 + createStore()는 reducer()를 요구한다(store 변수명은 자유롭게 작성).
const store = createStore(reducer);
// console.log(store); // dispatch, subscribe, getState, replaceReduce

// 3. reducer함수의 매개변수인 action에게 데이터를 보내는 방법(action에 보내는 값은 반드시 객체여야 한다 + 객체명에 type을 써야한다).
const handleAdd = () => {
  store.dispatch({ type: "ADD" });
}
const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// 4. getState() - reducer의 return 데이터를 가져오는 함수
// console.log(store.getState());

// 5. subscribe - store에 변화가 있을 때마다 호출되는 함수.
const onChange = () => {
  console.log(store.getState());
  number.innerText = store.getState();  
}
store.subscribe(onChange);

*/


/*********************************************  *********************************************/
/*********************************************  *********************************************/
/*********************************************  *********************************************/


// 두번쨰 정리
// 2. reducer() - createStore 저장된 데이터를 수정하는 함수.
//    action - 함수를 부를 때 쓰는 두번째 parameter 혹은 argument
//           - countModifier와 소통하기 위한 도구
const countModifier = (count = 0, action) => {
  console.log(count);

  switch(action.type) {
    case ADD: return count + 1;
    case MINUS: return count - 1;
    default: return count;
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
  countStore.dispatch({ type: ADD });
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


// 5. subscribe - store에 변화가 있을 때마다 호출되는 함수.
const onChange = () => {
  // console.log(countStore.getState());
  number.innerText = countStore.getState();  
}

countStore.subscribe(onChange);


// 4. getState() - countModifier의 데이터를 가져오는 함수
// console.log(countStore.getState());
