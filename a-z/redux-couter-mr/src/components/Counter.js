import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNum, decreaseNum } from '../reducer/counter';

/* 
react+redux - useSelector, useDispatch, Provider 사용 O
js+redux와 - useSelector와 useDispatch, Provider 사용 x

useSelector - 값을 가져오는 것(state 값을 가져오는 것)
useDispatch - 함수를 가져오는 것(액션에 값을 보내는 것)
*/


const Counter = () => {
    const count = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            <span> {count} </span>
            {/* 이렇게 생각하고 있는데 이것이 맞는지 알아보기 */}
            {/* 버튼 클릭 -> dispatch() 함수 실행 -> increaseNum() 함수 실행된 리턴값 dispatch를 통해 -> action에 값 전달 -> state 값이 변화(state의 값이 변화면 자동으로 리렌더링 되는 구조>)  */}
            <button onClick={() => dispatch(increaseNum())}> + </button>
            <button onClick={() => dispatch(decreaseNum())}> - </button>
        </div>
    );
};

export default Counter;