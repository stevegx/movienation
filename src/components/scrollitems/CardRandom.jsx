import React from 'react'

export default function CardRandom({movie}) {

    let image = 'https://image.tmdb.org/t/p/original/'
  return (
  
    <div className='inline-block cursor-pointer p-2 group'>
    <img className='h-72 w-60  rounded-lg my-2' src={image+movie.poster_path} alt={movie.title} />
    <div className='bg-neutral-800 bg-opacity-80 rounded-lg absolute top-4 h-72 w-60 hidden group-hover:block py-16 group-hover:max-md:w-40 max-md:py-2'>
      <p className='text-xl group-hover:truncate text-center'>{movie.title}</p>
      <div className='flex p-10 justify-center flex-wrap'>
        <div className='flex'>
            <h2 className='text-center mr-3'>{movie.original_language}</h2>
        </div>
      <h2 className='pr-3'>{movie.certification}</h2>
      <h2>{movie.runtime} min</h2>
      </div>
      <div className='flex gap-4  flex-wrap justify-center items-center'>
        <div className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-800 stroke-blue-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
            <h2>{movie.popularity}</h2>
            </div>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-yellow-600 fill-yellow-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <h2 >{movie.vote_average}</h2>
            </div>
      </div>
    </div>
    </div>
  )
}
