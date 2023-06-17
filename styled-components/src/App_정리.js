//README 참고(개념 정리 해놓음).

import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: lem;
  background: grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

// 조건에 따라 스타일을 적용하는 방법
const Button = styled.button`
  color: ${props => props.dark ? "white" : "dark"};
  background: ${props => props.dark ? "black" : "white"};
  border: 1px solid black;
`;

// 다른 컴포넌트의 스타일을 확장해서 사용하는 방법
// Button 컴포넌트의 속성에 border-radius를 추가한 컴포넌트.
const RoundedButton = styled(Button)` 
  border-radius: 16px;
`;

function App() {
  return (
    <>
      <Wrapper>
        <Title>
          안녕, 리액트!
        </Title>
      </Wrapper>
    
      <div>
        <Button> Normal </Button>
        <Button dark> Dark </Button>
        <RoundedButton> Rounded </RoundedButton>
      </div>
    </>
  )
}

export default App;
