import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
    const { isDark } = useContext(ThemeContext)

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' :  'black',
            }} 
        >
            <p> React is a JavaScript library for building user interfaces (UI) </p>
        </div>
    )
}

export default Content;