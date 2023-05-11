import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출(이론에 정리한 내용 참고 - 구조 분해 할당)

  const onChange = (e) => {
    const { value, name } = e.target; 
    // 우선 e.target 에서 name 과 value 를 추출해서 value와 name에 저장.
    // 입력하고 있는 <input name="name" placeholder="이름" value=""> 가 출력됨(여기서 value와 name에 저장되 값을 value와 name에 저장).

    // console.log(e.target);

    setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤(스프레드 연산자)
        [name]: value // const { value, name } = e.target; 여기서 name에 입력된 키 값이 [name]에 들어가고 value에 입력된 값을 [name]에 저장한다.
    });

  };

  const onReset = () => {
    setInputs({
        name: '',
        nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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