import { useState } from "react";

function InputSample() {
    // const [text, setText] = useState('');

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // 비구조화 할당을 통해 값 추출
    const { name, nickname } = inputs;

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    }

    return (
        <div>
            {/* 1.input 상태 관리하기 
                value={text}를 설정하지 않으면 초기화 버튼을 눌러도
                input에 입력된 내용이 초기화 되지 않는다. */}
            {/* <input onChange={onChange} value={text} /> */}
            

            {/* 2. 여러개의 input 상태 관리하기 */}
            <input placeholder="이름" />

            <input placeholder="닉네임" />

            <button onClick={onReset}> 초기화 </button>
            
            <div>
                <b> 값 : {text} </b>
                이름 (닉네임)
            </div>
        </div>
    )
}

export default InputSample;

