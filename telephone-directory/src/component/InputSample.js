import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {

       /* console.log(e.target); */
        
       const { value, name } = e.target;

       setInputs({
        ...inputs,
        [name]: value
       });
       /* 리액에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.
       (inputs[name] = value 와 같이 기존 상태를 직접 수정하면 값을 바꿔도 렌더린 되지 않는다, 따라서 객체를 복사하고 거기서 값을 바꿔야 한다). */
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder='이름' 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />

            <input 
                name="nickname" 
                placeholder='닉네임' 
                onChange={onChange} 
                value={nickname} 
            />

            <button onClick={onReset}> 초기화 </button>

            <div>
                <b> 값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;

