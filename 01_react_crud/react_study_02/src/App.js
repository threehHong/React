import logo from './logo.svg';
import './App.css';

/* state를 사용하기 위해 추가 */
import {useState} from 'react';


function Article(props) {
  return <article>
    <h2> {props.title} </h2>
    {props.body}
  </article>
}

function Header(props) {
  return <header>
    <h1> <a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}> WEB </a> </h1>
  </header>
}


function Nav(props) {
  const lis = []

  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}> <a id={t.id} href={'/read/'+t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}> {t.title} </a> </li>)
  }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {

  /* const _mode = useState("WELCOME");
  const mode = _mode[0];
  const setMode = _mode[1]; */

  // 위 3줄과 같은 내용(대괄호 안의 이름은 자유롭게 바꿀 수 있음)
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  // console.log('_mode', _wmode);
  /* 
  1. useState();에서 _mode 변수를 출력하면 _mode[0]에는 괄호 안의 인자가, _mode[1]에는 함수가 표시되어 있다
     즉 useState에서 0번째는 상태의 값을 읽을 때, 상태의 값을 변경 할 떄 사용
     
  2. useStated()의 괄호안의 값 즉 인자는 그 state의 초기값이고 배열의 0번째 값으로 읽는다 state의 값은 배열의 1번째 값으로 바꾼다.

  3. useState()를 사용하면 App()을 다시 실행 시켜줌.
  */

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]

  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"> </Article>
  } else if(mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}> </Article>
  }

  return (
    <div>
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME'); 
      }}> </Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id)
      }}> </Nav>
      
      {content}
      
    </div> 
  );
}

export default App;

