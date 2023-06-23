/* 
Input App - input 태그에 글씨를 입력하면 해당 내용이 확면에 실시간으로 표시되는 앱.
          - onChange, e.target.value
*/             

import React, { useState } from 'react';
import styled from "styled-components";

const App = () => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    return (
        <Section>
            <Title> {title} </Title>
            <Input 
                type="text"
                onChange={handleChange}
                placeholder='상단에 표시될 제목을 입력하세요'
            />
        </Section>
    );
};

export default App;

const Section = styled.section`
    padding: 20px;
`;

const Title = styled.h1`
    height: 20px;
    text-align: center
`;

const Input = styled.input`
    margin-top: 20px;
    width: 30%;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    text-align: center;
`;

