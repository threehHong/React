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
const countModifier = () => {
  return "hello"
};

// createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(countModifier);


console.log(countStore); // dispatch, subscribe, getState, replaceReduce

// getState() - 데이터를 가져오는 함수
console.log(countStore.getState()); // hello
