// Dark Moede - 조건부 렌더링

import React, { useState } from 'react';
import styled from "styled-components";
import './dark_mode.css';

function App () {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 첫번째 방법
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    // 두번째 방법
    /* const handlClick = () => {
        setIsDarkMode(!isDarkMode);
    } */    
 
    return (

        // 첫번째 방법
        <div className={isDarkMode ? 'dark' : 'light' }>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>

        // 두번쨰 방법
        /* isDarkMode ? 
        
        <DarkMode>
            <div>
                <button onClick={handlClick} > Dark Mode </button>            
            </div> 
        </DarkMode>
        
        :

        <LightMode>
            <div>
                <button onClick={handlClick} > Light Mode </button>            
            </div>
        </LightMode> */
    );
};

export default App;

// 두번쨰 방법
/* const DarkMode = styled.div`
    height: 100vh;
    padding: 20px;
    background: #fff;
`;

const LightMode = styled.div`
    height: 100vh;
    padding: 20px;
    background: #2b2b2b;
`; */

