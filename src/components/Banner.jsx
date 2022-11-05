import React,{useState, useEffect} from 'react'
import movies from '../movies.json'
import { useNavigate } from "react-router-dom"

export default function Banner() {
   let image = 'https://image.tmdb.org/t/p/original/'
   const [randomIndex,setRandomIndex] = useState(0) 
   const navigate = useNavigate()
   const movie = movies[randomIndex]
    const handleClick=(e)=>{
      navigate(`/movies/${movie.title}`,{state:{movie}})
  }

   useEffect(()=>{
    const interval = setInterval(() => {
      setRandomIndex(Math.floor(Math.random()*500))
    }, 10000);
    return () => clearInterval(interval);
   },[])
 
  return (
    <div onClick={handleClick}  className='flex justify-center h-5/6 w-full mt-10 mx-2 relative cursor-pointer max-sm:hidden group '>
      <h1 className='absolute bg-neutral-800 bg-opacity-80 w-full py-2 text-center text-4xl text-zinc-50 hidden group-hover:flex justify-center'>{movies[randomIndex].title}</h1>
        <img className='block h-full w-full object-fill justify-center rounded-xl' src={image+movies[randomIndex].poster_path} alt="" />
        <p className='absolute bg-neutral-800 bg-opacity-80 w-full text-center text-xl p-5 text-zinc-50 bottom-0 hidden group-hover:flex justify-center'>{movies[randomIndex].overview}</p>
    </div>
  )
}
