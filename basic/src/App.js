/* 
컴포넌트 인스턴스
<Content />를 Content 컴포넌트의 인스턴스라고 한다.
Content 컴포넌트를 불러온다(쉽게 함수를 호출한다 생각하기)

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
