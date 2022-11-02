import React from 'react'
import {useParams} from 'react-router-dom'
import movie from '../movies.json'
import SideBar from '../components/SideBar'


export default function MoviePage() {

  const id = useParams()
  const moviePage = movie.filter(element=> element.title == id.id)
  let image = 'https://image.tmdb.org/t/p/original/'
 


  return (
    <div className='flex'>
      <SideBar/>
      <div className='bg-neutral-900 text-zinc-50 w-screen h-screen overflow-x-hidden scroll-smooth flex'>
        <div className='flex-col'>
          <h1 className='text-center text-4xl mt-4'>{moviePage[0].title}</h1>
          <div className='flex my-3 justify-center text-gray-400'>
            <h2 className='mx-3'>{moviePage[0].certification}-rated</h2>
            <div className='flex gap-3'>
            {moviePage[0].genres.map((element)=>{
              return(
                <h1 
                  key={Math.random()}
                >{element}</h1>
              )
            })}
            </div>
            <h2 className='mx-3'>{moviePage[0].runtime} min</h2>
          </div>

            <div className='flex flex-wrap gap-4 justify-center my-3'>
              <div className='flex gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-yellow-600 fill-yellow-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
                <h1>{moviePage[0].vote_average} <span className='text-gray-300'>({moviePage[0].vote_count})</span></h1>
              </div>
              <div className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-800 stroke-blue-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                  <h2>{moviePage[0].popularity}</h2>
            </div>
            </div>
       
                <img className='h-3/5 w-5/6  m-auto rounded-xl' src={image+moviePage[0].poster_path}alt={moviePage.title} />
                <p className='text-center text-xl p-10'>{moviePage[0].overview}</p>
                <div className='flex gap-3 justify-center text-l'>
                  <h1>Language: <span className='text-blue-500'>{moviePage[0].original_language}</span></h1>
                  <div className='flex'>
                  <h1 className='mx-1.5'>Release Date: <span className='text-blue-500'>{moviePage[0].release_date}</span></h1>
                  <h1 className='mx-1.5'>Director: <span className='text-blue-500'>{moviePage[0].directors[0].name}</span></h1>
                  <h1>Cast:</h1>
                  {moviePage[0].cast.map((element)=>{
              return(
                <h1 
                  key={Math.random()}
                  className='mx-1.5 text-blue-500'
                >{element.name}</h1>
              )
            })}
                  </div>
                </div>
          
        </div>
      </div>
    </div>
  )
}
