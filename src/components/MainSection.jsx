import React from 'react'
import Banner from './Banner'
import FeaturedTodayList from './scrollitems/FeaturedTodayList'
import UpComingMoviesList from './scrollitems/UpComingMoviesList'
import TopRatedList from './scrollitems/TopRatedList'
import RandomPicksList from './scrollitems/RandomPicksList'
import FeaturedTodayListSeries from './scrollitems/FeaturedTodayListSeries'
import UpcomingListSeries from './scrollitems/UpcomingListSeries'
import TopRatedListSeries from './scrollitems/TopRatedListSeries'
export default function MainSection() {


  return (
    <div className='bg-neutral-900 text-zinc-50 px-10 w-screen h-screen overflow-x-hidden scroll-smooth'>
              <Banner/>
              <RandomPicksList RowID={Math.random+1}/>
              <FeaturedTodayList RowID={Math.random+2}/>
              <UpComingMoviesList RowID={Math.random+3}/>
              <TopRatedList RowID={Math.random+4}/>
              <FeaturedTodayListSeries RowID={Math.random+5}/>
              <UpcomingListSeries RowID={Math.random+6}/>
              <TopRatedListSeries RowID={Math.random+7}/>
    </div>
  )
}
