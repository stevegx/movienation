import React from 'react'
import {useLocation} from 'react-router-dom'
import series from '../tvshows.json'
import SideBar from '../components/SideBar'


export default function SeriesPage() {
    const location = useLocation()
    const seriesPage = location.state.series

  return (
    <div className='flex bg-neutral-900 text-zinc-50'>
        <SideBar/>
        <div className='w-screen h-screen overflow-x-hidden scroll-smooth'>
            <h1 className='text-center text-4xl mt-4'>{seriesPage.name} <span className='text-gray-300 text-3xl'>({seriesPage.premiered})</span></h1>   
                <div className='flex gap-4 text-gray-400 justify-center my-5'>
                    <h1>Status: {seriesPage.status}</h1>
                    {seriesPage.genres.map((element)=>{
                return(
                    <h1 
                    key={Math.random()}
                    >{element}</h1>
                )
                })}
                <h1>{seriesPage.runtime} min</h1>
                </div>
                <div className='flex justify-center gap-5'>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-yellow-600 fill-yellow-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                            <h1>{seriesPage.rating.average} <span className='text-gray-300'>({seriesPage.externals.tvrage})</span></h1>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-800 stroke-blue-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h2>{seriesPage.externals.thetvdb}</h2>
                    </div>
                </div>
                <div className='flex px-16 my-24 justify-center items-center gap-10'>
                    <img className='w-2/6 h-1/6 rounded-xl' src={seriesPage.image.original} alt={seriesPage.name} />
                    <p className='text-center text-xl'>{seriesPage.summary}</p>
                </div>
                <div className='flex justify-center gap-3 pt-8'>
                  <h1>Language: <span className='text-blue-500'>{seriesPage.language}</span></h1>
                  <h1 className='mx-1.5'>Release Date: <span className='text-blue-500'>{seriesPage.premiered}</span></h1>
                  <h1 className='mx-1.5'>Studio: <span className='text-blue-500'>{seriesPage.network.name}</span></h1>
                  <h1 className='mx-1.5'>Schedule: <span className='text-blue-500'>{seriesPage.schedule.days}-{seriesPage.schedule.time}</span></h1>
                  <h1 className='mx-1.5'>Type: <span className='text-blue-500'>{seriesPage.type}</span></h1>
                </div>
                <div className='flex text-3xl gap-2 absolute right-0 bottom-0 m-5'>
                    <a target='_blank' href={"https://imdb.com/title/"+seriesPage.externals.imdb}><i className="fa-brands fa-imdb hover:text-yellow-400"></i></a>
                    </div>
        </div>
    </div>
  )
}
