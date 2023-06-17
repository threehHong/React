## axios
- axios 개념 설명 및 연습
- 23.06.17(토) 생성

## axios란
- React에서 HTTP 요청을 처리하기 위해 사용하는 라이브러리
- get, post, put, delete 요청 등이 있다.

## axios 코드 구조
- axios.get(url) <br>
  .then(response => { <br>
  &nbsp; // 응답 처리 <br>
  }) <br>
  .catch(error => { <br>
  &nbsp; // 오류 처리 <br>
  }); <br>

## axios 사용방법
- npm install axios 설치 -> import axios from 'axios'(HTTP 요청을 보내고자 하는 컴포넌트에서 axios를 import).
- https://jsonplaceholder.typicode.com - Free Fake REST API