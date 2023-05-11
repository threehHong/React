import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })

  // useRef - 1
  // useRef()를 사용하여 Ref 객체를 만든다(이 객체를 선택하고 싶은 DOM에 ref 값으로 설정해준다).
  const nameInput = useRef();

  // 여러개의 input 상태 관리하기 - 1
  // 비구조화 할당을 통해 값 추출(이론에 정리한 내용 참고 - 구조 분해 할당)
  const { name, nickname } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target; 
    // 여러개의 input 상태 관리하기 - 2
    // 우선 e.target 에서 name 과 value 를 추출해서 value와 name에 저장.
    // 입력하고 있는 <input name="name" placeholder="이름" value=""> 가 출력됨(여기서 value와 name에 저장되 값을 value와 name에 저장).

    // console.log(e.target);

    setInputs({
        // 여러개의 input 상태 관리하기 - 3
        ...inputs, // 기존의 input 객체를 복사한 뒤(스프레드 연산자)
        [name]: value // const { value, name } = e.target; 여기서 name에 입력된 키 값이 [name]에 들어가고 value에 입력된 값을 [name]에 저장한다.
    });

  };

  const onReset = () => {
    setInputs({
        name: '',
        nickname: '',
    });
    
    // useRef - 2
    // Ref 객체의 .current는 ref 객체가 있는 태그를 가르킨다.
    nameInput.current.focus();
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} /> {/* useRef - 3 */}
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} /> 
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;