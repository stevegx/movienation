import React from 'react'
import series from '../../tvshows.json'
import SeriesCard from './SeriesCard'

export default function FeaturedTodayListSeries({RowID}) {
    const tvseries = series.slice(20,40)

    const slideToLeft = () => {
        var slider = document.getElementById('slider'+RowID);
        slider.scrollLeft = slider.scrollLeft - 100;
      };
      const slideToRight = () => {
        var slider = document.getElementById('slider'+RowID);
        slider.scrollLeft = slider.scrollLeft + 100;
      };
    

    return (
        <>
        <h1 className='text-2xl m-2 mt-10'>Featured Series:</h1>
        <div className='relative flex items-center'>
        <button onClick={slideToLeft} className=' left-0 rounded-xl absolute cursor-pointer z-10 bg-neutral-700 bg-opacity-70 p-10 max-md:p-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              </button>
                <div id={'slider'+RowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative active:text-blue-600'>
                    {tvseries.map(element =>{
                        return(
                            <SeriesCard
                            key= {element.id}
                            series={element}/>
                        )
                    })}
                </div>
            <button onClick={slideToRight} className='right-0 rounded-xl absolute cursor-pointer z-10 bg-neutral-700 bg-opacity-70 p-10 max-md:p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </button>
       </div>
       </>
      )
}
