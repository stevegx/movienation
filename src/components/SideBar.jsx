import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import movies from '../movies.json'
import series from '../tvshows.json'
export default function SideBar() {

  const [userOpen,setUserOpen] = useState(false)
  const [moviesOpen,setMoviesOpen] = useState(false)
  const [seriesOpen,setSeriesOpen] = useState(false)
  const [searchValue,setSearchValue] = useState('')
  const navigate = useNavigate()

  const handleClick=(e)=>{
    navigate(`/`)
}

const handleClickMovies=(e)=>{
  const page=e.target.innerText
  
  let movieProvider = movies
  switch (page) {
    case 'Top-100 Movies':
      movieProvider = movieProvider.sort((a,b)=>b.vote_average - a.vote_average)
    break;
    case 'Most Popular Movies':
      movieProvider = movieProvider.sort((a,b)=>b.vote_count - a.vote_count)
    break;
    case 'Top Box Office':
      movieProvider = movieProvider.sort((a,b)=>b.revenue - a.revenue)
    break;
  
    default:
      break;
  }
  navigate(`/MoviesList/${page}`,{state:[{movieProvider},page]})
}

const handleClickSeries=(e)=>{
  const page=e.target.innerText
  
  let seriesProvider = series
  switch (page) {
    case 'Top-100 Series':
      seriesProvider = seriesProvider.sort((a,b)=>b.rating.average - a.rating.average)
    break;
    case 'Most Popular Series':
      seriesProvider = seriesProvider.sort((a,b)=>b.externals.tvrage - a.externals.tvrage)
    break;
    case 'Top Box Office':
      seriesProvider = seriesProvider.sort((a,b)=>b.revenue - a.revenue)
    break;
  
    default:
      break;
  }
  navigate(`/SeriesList/${page}`,{state:[{seriesProvider},page]})
}

const handleSearch=(e)=>{
  e.preventDefault()
    let searchMovies = movies.filter(element=> element.title.toLowerCase().includes(searchValue.toLowerCase()))
    let searchSeries = series.filter(element=> element.name.toLowerCase().includes(searchValue.toLowerCase()))
  navigate('/searchResults/',{state:{searchMovies,searchSeries}})  
}

  return (
<div className='flex-col bg-neutral-800 w-fit h-screen max-sm:w-54 p-3 sticky top-0 text-zinc-50'>
<h2 onClick={handleClick} className='text-3xl font-bold text-zinc-50 cursor-pointer hover:brightness-125 active:brightness-90'> <span className='text-blue-600  font-black'>Movie</span>Nation</h2>
<div className='flex-col text-zinc-50 my-4'>
  <div onClick={()=>{setUserOpen(!userOpen)}} className='flex  gap-2 hover:bg-neutral-700 hover:rounded-xl p-2 cursor-pointer'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  <h3>User</h3>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(userOpen?'':'hidden')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(userOpen?'hidden':'')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  </div>
    <div className={(userOpen?'flex-col align-center':'hidden')}>
      <div className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <h3>Settings</h3>
      </div>
      <div className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
      </svg>
      <h3>Log Out</h3>
      </div>
    </div>
</div>
<form onSubmit={handleSearch} className='flex items-center bg-zinc-50 rounded-xl text-black my-5'> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 m-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    <input type="search" value={searchValue} onChange={(e)=>(setSearchValue(e.target.value))} className='cursor-pointer outline-none border-none rounded-xl p-1'/>
</form>

<div onClick={()=>{setMoviesOpen(!moviesOpen)}} className='flex  gap-2 hover:bg-neutral-700 hover:rounded-xl p-2 cursor-pointer'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
  </svg>
  <h3>Movies</h3>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(moviesOpen?'':'hidden')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(moviesOpen?'hidden':'')}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
  </div>
    <div className={(moviesOpen?'flex-col align-center':'hidden')}>
      <div onClick={handleClickMovies} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
      <h3>Top-100 Movies</h3>
      </div>
      <div onClick={handleClickMovies} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
      <h3>Most Popular Movies</h3>
      </div>
      <div onClick={handleClickMovies} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
      <h3>Top Box Office</h3>
      </div>
    </div>

    <div onClick={()=>{setSeriesOpen(!seriesOpen)}} className='flex mt-2 gap-2 hover:bg-neutral-700 hover:rounded-xl p-2 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
      <h3>Series</h3>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(seriesOpen?'':'hidden')}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-6 h-6 hidden"+(seriesOpen?'hidden':'')}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
      <div className={(seriesOpen?'flex-col align-center':'hidden')}>
        <div onClick={handleClickSeries} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
        <h3>Top-100 Series</h3>
        </div>
        <div onClick={handleClickSeries} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
        <h3>Most Popular Series</h3>
        </div>
        <div onClick={handleClickSeries} className='flex hover:bg-neutral-700 hover:rounded-xl cursor-pointer py-2 pl-8 gap-3 hover:text-blue-500 active:bg-neutral-600'>
        <h3>Top Box Office</h3>
        </div>
      </div>

 </div>

  )
}


