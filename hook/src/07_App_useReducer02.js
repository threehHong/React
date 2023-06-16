import './App.css';
import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin: 20px;
`;  

const Student = ( {name, dispatch, id, isHere} ) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black'
        }}
        onClick={() => {
          dispatch({ type: 'mark-student', payload: { id } })
        }}
      > {name} </span> 
      <button onClick={() => {
        dispatch({ type: 'delete-student', payload: {id} })
      }}> 삭제 </button>
    </div>
  )
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      }
    return {
      count: state.count + 1,
      students: [...state.students, newStudent]
    }

    case 'delete-student':

    return {
      count: state.count - 1,
      students: state.students.filter((student) => student.id !== action.payload.id),
    }

    case 'mark-student':
    return {
      count: state.count,
      students: state.students.map((student) => {
        if(student.id === action.payload.id) {
          return {...student, isHere: !student.isHere}
        }
        return student;
      })
    }

    default: return state;
  }
};

const initialState = {
  count: 0,
  students: [
    /* {id: Date.now(),
    name: 'James',
    isHere: false,} */
  ]
}

function App() {
  const [name, setName] = useState('');
  const [studentInfo, dispatch] = useReducer(reducer, initialState)

  return (
    <Div>  
      <h2> 출석부 </h2>
      <p> 총 학생 수 : {studentInfo.count} </p>
      <input
        type="text"
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
      </input>

      <button onClick={() => {
        dispatch({type: 'add-student', payload: {name}})
      }}> 추가 </button>

      {studentInfo.students.map((student) => {
        return <Student 
          key={student.id} 
          name={student.name} 
          dispatch={dispatch} 
          id={student.id} 
          isHere={student.isHere}
          />
          
      })}
    </Div>
  );
}

export default App;
