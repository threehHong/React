import { useState } from "react";

function Counter() {
    
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);

        // useState에서 함수형 업데이트 방식(추후 탐구 및 정리)
        // setNumber(prevNumber => prevNumber + 1);
        console.log('+1');
    }
    const onDecrease = () => {
        setNumber(number - 1);

        // useState에서 함수형 업데이트 방식(추후 탐구 및 정리)
        // setNumber(prevNumber => prevNumber - 1);
        console.log('-1');
    }

    return (
        <div>
            <h1> {number} </h1>
            <button onClick={onIncrease}> +1 </button>
            <button onClick={onDecrease}> -1 </button>
        </div>
    )
}

export default Counter;