import React from 'react'

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => { 
    setValue(e.target.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='해야할 일을 입력하세요'
            onChange={handleChange}
            value={value}
        /> &nbsp;
        
        <button> add </button>

        <hr/>
    </form>
  )
}
