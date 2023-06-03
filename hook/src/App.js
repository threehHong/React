import styled from 'styled-components';
import { useFetch } from './component/useFetch';

const Div = styled.div`
    margin: 20px;
`;  

const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
  const {data, fetchUrl} = useFetch(baseUrl, 'users');

  return (
    <Div>  
      <h1> useFetch </h1>

      <button onClick={() => fetchUrl("users")}> Users </button>
      <button onClick={() => fetchUrl("posts")}> Posts </button>
      <button onClick={() => fetchUrl("todos")}> Todos </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Div>
  );
}

export default App;

/*  
https://jsonplaceholder.typicode.com/ - 더미 데이터 
com/user - 유저 정보 더미 데이터.
com/post - 게시글 더미 데이터.
com/todo - 할일 더미 데이터.
*/