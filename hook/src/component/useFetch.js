import { useState, useEffect } from "react";
 
export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null)

  const fetchUrl  = (type) => {
    fetch(baseUrl + '/' + type) // ajax 생각하기
    .then((res) => res.json()) // fetch로 가져온 데이터를 json 형태로 변환
    /* .then((res) => console.log(res)); */ // 변환된 값을 콘솔에 출력
    .then((res) => setData(res));
  }

  useEffect(() => {
    fetchUrl(initialType)
  }, [])

  /* console.log(initialType); */

  return {
    data,
    fetchUrl
  } 
}