import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

 
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
    }}> {props.title} </a> </h1>
  </header>
}

function Nav(props) {
  const lis = []
    for(let i=0; i<props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(<li key={t.id}> <a href={'/read/'+t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMode(t.id); 
      }}> {t.title} </a> </li>)
    }

  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props) {
  return <article>
    <h2> Create </h2>
    <form onSubmit={(event) => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p> 
        <input type="text" name="title" placeholder='title'/>
      </p>

      <p>
        <textarea name="body" placeholder='body'> </textarea>
      </p>

      <p>
        <input type="submit" value="Create"/>
      </p>
    </form>
  </article>
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
    <h2> Update </h2>
    <form onSubmit={(event) => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p> 
        <input type="text" name="title" placeholder='title' value={title} onChange={(event) => {
          console.log(event.target.value)
          setTitle(event.target.value);
        }}/> {/* 컴포넌트라서 value에 할당된 값이 지워지지 않고 input 태그에 입력또한 할 수 없는건가? */}
      </p>

      <p>
        <textarea name="body" placeholder='body' value={body} onChange={(event) => {
          console.log(event.target.value)
          setBody(event.target.value);
        }}> </textarea>
      </p>

      <p>
        <input type="submit" value="Update"/>
      </p>
    </form>
</article>
}

function App() {
  /* useState
  1. 배열을 리턴한다
  2. 0번째 원소는 상태의 값을 읽을 때 사용(useState()함수에 사용된 인자가 0번째 원소의 값).
  3. 1번째 원소는 상태의 값을 변경할 때 사용 
  4. useState를 통해 App() 재실행(컴포넌트 재실행 or 재랜더링 or UI 업데이트).
  5. 상단에 import { useState } from 'react'; 입력해야함 
  6. const [nextId, setNextId] = useState(); - 원리 코딩앙마 구조 분해편 보기 */

   /* const _mode = useState("WELCOME");
   const mode = _mode[0];
   const setMode = _mode[1]; */
   const [mode, setMode] = useState('WELCOME');
   const [id, setId] = useState(null);
   const [nextId, setNextId] = useState(4); 

  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ])

  let content = null;
  let contextCotrol = null;

  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"> </Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title; 
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}> </Article>
    contextCotrol = <>
    <li> <a href={'/update/'+id} onClick={(event) => {
      event.preventDefault();
      setMode('UPDATE');
    }}> UPDATE </a> </li>
    <li> <input type="button" value="Delete" onClick={(evnet) => {
      const newTopics = []
      for(let i=0; i<topics.length; i++) {
        if(topics[i].id !== id) {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}/> </li>
    </>
  } else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id:nextId, title:_title, body:_body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics);
      setMode('READ');

      /* setId(nextId)를 통해 id값이 4로 저장됨(nextId값은 4임) */
      setId(nextId);
      setNextId(nextId+1);
    }}> </Create>    
  } else if (mode === "UPDATE") {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title; 
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} onUpdate ={(title, body) => {
      console.log(title, body);
      const newTopics = [...topics]; // 배열은 [...] 형태로?, topics 복제?
      const updatedTopic = {id: id, title: title, body: body}
      for(let i=0; i<newTopics.length; i++) {
        if(newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}> </Update>
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}> </Header>

      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id)
      }}> </Nav>

      {content}

      <ul>
        <li>
          <a href="/create" onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
          }}> CREATE </a>
        </li>

        {contextCotrol}
      </ul>

    </div>
  );
}

export default App;

