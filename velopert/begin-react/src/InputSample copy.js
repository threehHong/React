import { useState, useRef } from "react";

function InputSample() {
    // const [text, setText] = useState('');

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    // 비구조화 할당을 통해 값 추출
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const {value, name} = e.target; // 우선 e.target에서 name과 value를 추출

        console.log(e.target);

        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        })
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })

        nameInput.current.focus();

    }

    return (
        <div>
            {/* 1.input 상태 관리하기 
                value={text}를 설정하지 않으면 초기화 버튼을 눌러도
                input에 입력된 내용이 초기화 되지 않는다. */}
            {/* <input onChange={onChange} value={text} /> */}
            

            {/* 2. 여러개의 input 상태 관리하기 */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>

            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />

            <button onClick={onReset}> 초기화 </button>
            
            <div>
                <b> 값 : </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;

