import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// 숫자가 0에서 부터 시작하는지 테스트 코드
test("the counter starts at 0", () => {
    render(<App />);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(0);
});

// 마이너스 버튼 테스트 코드
test("minus button has correct text", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("minus-button");
    expect(buttonElement).toHaveTextContent("-");
});

// 플러스 버튼 테스트 코드
test("plus button has correct text", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("plus-button");
    expect(buttonElement).toHaveTextContent("+");
});

// 플러스 버튼이 눌렸을 때, 숫자가 1증가하는지 테스트 코드
test("When the + button is pressed, the counter changes to 1", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("plus-button");
    fireEvent.click(buttonElement);

    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(1);
});

// on/off 버튼이 파란색 버튼인지 확인하는 코드
test("on/off button has blue color", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("on/off-button");
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

// on/off 버튼이 클릭 됐을 때, -,+ 버튼이 눌러지는 것을 막는지 테스트 하는 코드
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
    render(<App />);

    const onOffButtonElement = screen.getByTestId("on/off-button");
    fireEvent.click(onOffButtonElement);

    const plusButtonElement = screen.getByTestId("plus-button");
    expect(plusButtonElement).toBeDisabled();
});

// test case의 구조
/* 
test("테스트 케이스의 제목 - 테스트의 목적과 동작을 이해하기 쉽게 전달하는 제목", () => {
  // 테스트할 컴포넌트를 렌더링(보통 <App />을 하면되지 않나 생각이 듬, 전체를 테스트 할 수 있으니)
  render()

  // 검증할 요소(태그) 선택 
  const 변수명 = screen.getByTestId("태그 data-testid 속성에 사용할 명칭")

  // 기대하는 결과 검증
  expext(변수명).기대도는 동작 함수()

})

// 리액트 테스트 케이스를 작성하는데 필요한 도구
Jest, React Testing Library
위 도구들은 따로 설치할 필요 없음 npx create-react-app으로 셋팅하면 자동으로 설치 되므로.

*/
