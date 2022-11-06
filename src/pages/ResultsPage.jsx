import React from 'react'
import {useLocation} from 'react-router-dom'
import SideBar from '../components/SideBar'
import SearchCard from '../components/scrollitems/SearchCard'
import SearchCardSeries from '../components/scrollitems/SearchCardSeries'
export default function ResultsPage() {
    const location = useLocation()
    let image = 'https://image.tmdb.org/t/p/original/'
    let movies = location.state.searchMovies
    let series = location.state.searchSeries
  console.log(location);
  return (
    <div className='flex bg-neutral-900 text-zinc-50'>
        <SideBar/>
        <div className='flex flex-wrap m-10'>
        {movies.length>0?<div className='flex flex-wrap gap-9'>
        {movies.map(element =>{
                        return(
                            <SearchCard
                            key= {element.id}
                            movie={element}/>
                        )
                    })}
        </div>:''}
       
        {series.length>0?<div className=''>
        {series.map(element =>{
                        return(
                            <SearchCardSeries
                            key= {element.id}
                            series={element}/>
                        )
                    })}
        </div>:''}
        </div>
    </div>
  )
}
