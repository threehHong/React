import { createStore } from "redux";

const countModifier = () => {
    return "hello"
}


// createStore() - data를 저장하는 장소 + createStore()는 reducer()를 요구한다.
const countStore = createStore(countModifier);

console.log(countStore); // 

console.log(countStore.getState());


