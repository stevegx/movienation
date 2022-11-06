import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import SideBar from '../components/SideBar'

export default function SeriesMenuList() {

    const location = useLocation()
    const seriesPage = location.state[0].seriesProvider.splice(0,100)
    const navigate = useNavigate()
    console.log(seriesPage);
  return (
    <div className='flex bg-neutral-900 text-zinc-50'>
        <SideBar/>    
        <div className='w-screen h-screen overflow-x-hidden scroll-smooth'>
            <h1 className='text-3xl font-bold text-zinc-50 cursor-pointer hover:brightness-125 active:brightness-90 text-center mt-3'> <span className='text-blue-600  font-black'>series</span>Nation</h1>
            <h1 className='text-center mt-3 text-xl'>{location.state[1]}</h1>
            <div className='flex-col '>
              {seriesPage.map(series =>{
                          return(
                              <div onClick={()=>{navigate(`/series/${series.name}`,{state:{series}})}}
                                  id={series.title}
                                  key={series.id}
                                  className='bg-neutral-800 p-2 flex items-center gap-3 cursor-pointer h-fit w-fit m-5 border border-gray-400 border-opacity-10 rounded-xl hover:bg-neutral-700 active:text-blue-500 group'>
                                  <img className='rounded-xl w-1/12 max-md:w-1/4' src={series.image.original} alt={series.name} />
                                  <div className='flex flex-wrap gap-5'>
                                    <h1>{series.name}</h1>
                                    <h1 className='text-gray-300 group-active:text-blue-500'>({series.premiered})</h1>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-blue-800 stroke-blue-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h2>{series.externals.tvrage}</h2>
                                    </div>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 stroke-yellow-600 fill-yellow-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <h2 >{series.rating.average}</h2>
                                    </div>
                                  </div>
                              </div>  
                          )
              })}
            </div>
        </div>
    </div>

  )
}
