import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from '../../API/axios'
import "./SearchPage.css";

export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([]);

  console.log('useLocation()', useLocation());

  const useQuery = () => {
    // useLocation을 통해 현재 URL 정보 가져올 수 있다
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  // q값 불러와서 searchTerm에 저장
  const searchTerm = query.get("q");

  console.log('searchTerm', searchTerm);

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm])

  const fetchSearchMovie = async (searchTerm) => {
    console.log("searchTerm", searchTerm);
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return(
              <div className='movie'>
                <div
                  className='movie__column-poster'
                >
                  <img 
                    src={movieImageUrl}
                    alt="movie image"
                    className='movie__poster'
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div> 
      </section>
    );
  }

  return renderSearchResults();
}
