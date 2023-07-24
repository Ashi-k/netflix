import React from 'react'
import './Banner.css'
import axios from 'axios'
import { API_KEY,imageUrl } from '../../constants/Constants';
import { useEffect } from 'react'
import { useState } from 'react';


function Banner() {

  const [movie, setMovie] = useState();
  

  
useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results[0]);
    setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
   })
}, []);
  return (
    <div 
    style={{backgroundImage:`url(${movie ?imageUrl+ movie.backdrop_path :""})`}} 
    className='banner'> 
      <div className='content'>
        <h1 className='title'>{movie ? movie.title:""}</h1>
          <div className='banner-buttons'>
             <button className='button'>Play</button>
             <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview:""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}
export default Banner