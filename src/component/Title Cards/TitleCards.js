import React,{useRef,useEffect,useState} from 'react'
import './TitleCards.css'
import {Link} from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data'

const TiltleCards = ({title,category}) => {
const [apiData,setApiData]=useState([])
const cardsRef = useRef();
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjVhMTc1NzFmZTgzYTM2ZjQ3ZDc5MWNkMTgwMjY5YiIsIm5iZiI6MTczMTkxNDYyMC4yNDUyMTA0LCJzdWIiOiI2NzNhZWE0ZWJiYjQ5ZjA2YTAwZGJjYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.raIe95mEHTLv3U4_QaRGSIA19NR4zILc0TA-NkAwE6Q'
  }
};



const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])
  return (
    <div className='title-cards'>
      <h1>{title?title:"Popular on Netflix"}</h1>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
          return (
          <Link to={`/player/${card.id}`} className='card' key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
            <p>{card.original_title}</p>
          </Link>)
        })}
      </div>
    </div>
  )
}

export default TiltleCards