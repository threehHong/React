import React from 'react'

// 질문 이거는 어디서 오는 것인가 여기 주소에서 posrt_path에 값에 따라 변화
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"; 

export default function Movie( { title, poster_path, vote_average }) {
    return (
        <div className='movie-container'> 
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <div className='movie-info'>
                <h4> {title} </h4>
                <span> {vote_average} </span> 
            </div>
        </div>
    )
}