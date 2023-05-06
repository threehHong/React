import logo from './logo.svg';
import './App.css';

/* App이라는 밑의 함수를 통해 npm start시 라이브 서버에 표시되는 샘플 페이지 화면이 구성된다 */

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


/********** component 만드는 방법(사용자 정의 태그 만드는 방법) **********/
/* 사용자 정의 태그(component) 만드는 방법
   1. 태그명의 첫글자는 대문자를 사용해야 한다.
   2. function 태그명() {return 태그 구문}.
   3. <태그명></태그명> 형태로 호출하여 사용한다. */
function Nav() {
  return <nav>
          <h2> React 정리할 개념(첫 번째 component) </h2>
          <ol>
            <li> <a href='#'> component </a> </li>
            <li> <a href='#'> props </a> </li>
            <li> <a href='#'> state </a> </li>
            <li> <a href='#'> create </a> </li>
            <li> <a href='#'> update </a> </li>
            <li> <a href='#'> delete </a> </li>
            <li> <a href='#'> render </a> </li>
          </ol>
        </nav>
}

/********** props - 속성(리액트에서 속성을 prop이라고 함) **********/
/* 매개변수명은 props로 함(매개변수명 아무거나 해도되지만 구분을 위해 props로 사용한다) */
function Article(props) {
  /* 매개 변수를 출력해보면 Article에서 속성으로 입력한 값이 객체의 속성과 속성값으로 들어온다 */
  console.log(props); 
  console.log(props.title, props.content);  
  return <article>
            <h2> 두 번째 component + {props.title} + {props.content} </h2>
            <p> 컴포넌트 만들기 어렵지 않다 </p>
         </article>
}


function Main(props) {
  return <main>
            <h2> {props.title} </h2>
            <p> {props.content} </p>
         </main>
}


function Section(props) {
  console.log(props)
  const list = []
  
  /* props.topics.length - topics의 원소의 개수
     push - push w3shools로 구글에 검색해서 복습하기 */
  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(<li key={t.id}> {t.id}. {t.title} </li>);
  } 
  /* li태그 내부에 있는 key={t.id} 속성인 prop은 화면에 반영되지 않는다. 이렇게 자동으로 생성한 태그들은 리액트가 추적 할 수 있는 장치라고 우선 생각하(이러므로써 리액트의 성능이 좋아진다-정확하게 동작할 수 있다). */

  return <section>
            <ul>
              {list}
            </ul>
         </section>
}

function Div(props) {
  return <div>
            <h2> {props.title} </h2>
            <p> {props.content} </p>
         </div>
}

function App() {

  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        Hello React~!
      </header>

      <Nav> </Nav>
      <Nav> </Nav>

      <Article title="props study" content="props is property"> </Article>

      <Main title="props1" content="props는 리액트에서 속성을 의미"> </Main>
      <Main title="props2" content="이런식으로 응용할 수 있구나"> </Main>

      <Section topics={topics}> </Section>

      <Div title="props study" content="now i'm studing props concept of react"> </Div>

    </div>
  );
}

export default App;
