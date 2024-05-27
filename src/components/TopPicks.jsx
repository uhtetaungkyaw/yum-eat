import React from 'react'
import { topPicks } from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

export const TopPicks = () => {
    return (
        <div>
            <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
              Top Picks
            </h1>
            <div className='md:flex max-w-[1520px] m-auto py-2 px-2'>
              <Splide options = {{perPage:4, gap:"0.5rem", grag:"free", arrows:false}}>
                  {
                    topPicks.map(items => (
                      <SplideSlide key={items.id}>
                          <div className='rounded-3xl relative'>
                            <div className='absolute w-full h-full rounded-3xl text-white'>
                              <p className='px-2 '>{items.title}</p>
                              <p className='px-2 '>{items.price}</p>
                             <button className='border-dotted border-white text-white
                             mx-2 absolute bottom-4'>
                                Add to Cart
                             </button>
                          </div>
                          <img src={items.img} 
                          className='h-[200px] w-full object-cover rounded-3xl cursor-pointer
                          hover:scale-105 ease-out duration-300'
                          alt={items.title} />
                          </div>
                      </SplideSlide>
                    ))
                  }
              </Splide>
            </div>
        </div>
      )
}