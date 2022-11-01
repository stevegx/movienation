import React,{useState, useEffect} from 'react'
import movie from '../movies.json'
import series from '../tvshows.json'
export default function Banner() {
   let image = 'https://image.tmdb.org/t/p/original/'
   const [randomIndex,setRandomIndex] = useState(0) 
console.log(series);
   useEffect(()=>{
    const interval = setInterval(() => {
      setRandomIndex(Math.floor(Math.random()*500))
    }, 10000);
    return () => clearInterval(interval);
   },[])
 
  return (
    <div className='flex justify-center h-3/4 w-full relative cursor-pointer max-sm:hidden group'>
      <h1 className='absolute bg-neutral-800 bg-opacity-80 w-full py-2 text-center text-4xl text-zinc-50 hidden group-hover:flex justify-center'>{movie[randomIndex].title}</h1>
        <img className='block h-full w-full object-fill justify-center rounded-xl' src={image+movie[randomIndex].poster_path} alt="" />
        <p className='absolute bg-neutral-800 bg-opacity-80 w-full text-center text-xl p-5 text-zinc-50 bottom-0 hidden group-hover:flex justify-center'>{movie[randomIndex].overview}</p>
    </div>
  )
}
