import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/* 
// reducer() - createStore에 저장된 데이터를 수정하는 함수.
const reducer = () => {
  return "hello"
};

// createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(reducer); 
*/



// reducer() - createStore 저장된 데이터를 수정하는 함수.
/* action - 함수를 부를 때 쓰는 두번째 parameter 혹은 argument
          - countModifier와 소통하기 위한 도구 */
const countModifier = (count = 1, action) => {
  console.log(action)

  return count
};

// createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(countModifier);


console.log(countStore); // dispatch, subscribe, getState, replaceReduce

// getState() - 데이터를 가져오는 함수
console.log(countStore.getState()); // hello


// countModifier에게 action을 보내는 방법
countStore.dispatch({ type: "HELLO" })