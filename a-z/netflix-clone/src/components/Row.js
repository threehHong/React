import React, { useEffect, useState } from 'react'
import axios from '../API/axios';
import "./Row.css";
import MovieModal from "./MovieModal";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row( {isLargeRow, title, id, fetchUrl} ) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState();
    const [movieSelected, setmovieSelected] = useState({});
    
    useEffect(() => {
        fetchMovieData();
    }, [])

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        /* console.log('request :', request); */
        setMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setmovieSelected(movie);
    };

    return (
        <section className='row'>
            <h2> {title} </h2>

            {/* <div className='slider'>ct';

                <div className='slider__arrow-left'>
                    <span className='arrow' onClick={() => {
                        document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                    }}> {"<"} </span>
                </div> */}


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                
                // loop - 이미지 슬라이드 처음으로 돌아오게 할지 유무
                loop={true}
                
                // 이미지 사이 간격
                /* spaceBetween={50} */
                
                // 보여지는 이미지 개수
                /* slidesPerView={5} */

                // 구간 별로 슬라이드 보여지는 개수
                breakpoints={{
                    1378: {
                      slidesPerView: 6, // 한번에 보이는 슬라이드 개수
                      slidesPerGroup: 6, // 몇개씩 슬라이드 할지
                    },
                    998: {
                      slidesPerView: 5,
                      slidesPerGroup: 5,
                    },
                    625: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                    0: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                  }}

                  // arrow 버튼 사용 유무
                  navigation 
                  
                  // 페이지 버튼 보이게 할지
                  pagination={{ clickable: true }}
                

                  onSlideChange={() => console.log('slide change')}

            >

                <div id={id} className='row__posters'>
                    {movies.map((movie) => (
                        <SwiperSlide>
                            <img 
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                                alt={movie.name}
                                onClick={() => handleClick(movie)}
                            />
                        </SwiperSlide>
                    ))}    
                </div>
            </Swiper>

                {/* <div className='slider__arrow-right'>
                    <span className='arrow' onClick={() => {
                        document.getElementById(id).scrollLeft += window.innerWidth - 80;
                    }}> {">"} </span>
                </div>
            </div> */}

                {
                    modalOpen && (
                        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                    )
                }

        </section> 
  )
}
