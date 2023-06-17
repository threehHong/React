## axios
- axios 개념 설명 및 연습
- 23.06.17(토) 생성

## axios란
- 서버와 데이터를 쉽게 주고 받을 수 있도록 도와주는 리액트 라이브러리(서버와의 통신을 도와주는 도구)
- get, post, put, delete 요청 등이 있다.

## axios 코드 구조
- axios.get(url) <br>
  .then(response => { <br>
  &nbsp; // 통신에 성공했을 떄 실행되는 메소드 <br>
  &nbsp; // 응답 데이터 접근 <br>
  &nbsp; const data = response.data; <br>
  &nbsp; // 추가 작업 수행
  }) <br>
  .catch(error => { <br>
  &nbsp; // 통신에 실패했을 때 실행되는 메소드 <br>
  }); <br>

- axios를 통해 받은 응답은 .then() 메서드 내에서 처리된다
  reponse 매개 변수의 data에 접근해서(reponse.data) axios를 통해 응답 받은 데이터에 접근 할 수 있다.

## axios 사용방법
- npm install axios 설치 -> import axios from 'axios'(HTTP 요청을 보내고자 하는 컴포넌트에서 axios를 import).
- https://jsonplaceholder.typicode.com - Free Fake REST API