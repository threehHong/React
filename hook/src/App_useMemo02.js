import './App.css';
import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-left: 20px; 
`;

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국';
  const location = useMemo(() => {
    return {
        country: isKorea ? '한국' : '외국',
    }
  }, [isKorea]);
  
//   {
//     country: isKorea ? '한국' : '외국',
//   }

  useEffect(() => {
    console.log('useEffect 호출');
  }, [location])

  return (
    <Div> 
        <h3> 하루에 몇끼 먹었어요? </h3>
        <input 
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        <hr />
        
        <h3> 어느 나라에 있어요? </h3>
        <p> 나라: {location.country} </p>
        <button onClick={() => setIsKorea(!isKorea)}> 비행기 타자 </button>
    </Div>
  );
}

export default App;

