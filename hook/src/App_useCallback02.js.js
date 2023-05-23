import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px,
  `;

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    console.log('박스 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}> </div>;
}


function App() {
  const [size, setSize] = useState(100);  
  const [isDark, setIsDark] = useState(false);

  
  const createBoxStyle = useCallback(() => {
  // useCallback()이 없을 경우 Change Theme 버튼 클릭시 콘솔에 박스 키우기가 출력되고 없을 경우 input 태그 조작 시에만 박스 키우기가 출력된다.
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  
  return (
    <Div
      style={{
        background: isDark ? 'black' : 'white',
      }}
    >  
      <input 
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      
      <button onClick={() => setIsDark(!isDark)}> Change Theme </button>

      <Box createBoxStyle={createBoxStyle} />

    </Div>
  );
}

export default App;
