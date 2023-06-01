/* 
컴포넌트 인스턴스(Component Instance)
<Content />를 Content 컴포넌트의 인스턴스라고 한다.
정의한 Content 컴포넌트를 불러온다(쉽게 함수를 호출한다 생각하기)

인스턴스 정의(리액트)
리액트에서 컴포넌트 인스턴스는 리액트 컴포넌트를 클래스 또는 함수로 정의한 후, 해당 컴포넌트를 사용하여 생성된 객체를 의미
*/

import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  return (
    <div>
      <Header name='React' />
      <Content />
    </div>
  );
}

export default App;


/* 
인스턴스 정의(객체지향 프로그래밍)
인스턴스(Instance)는 객체 지향 프로그래밍에서 클래스(Class)를 기반으로 생성된 구체적인 실체를 의미합니다. 클래스는 객체를 생성하기 위한 템플릿이라면, 인스턴스는 그 템플릿을 바탕으로 실제로 메모리에 할당된 객체를 말합니다.
*/