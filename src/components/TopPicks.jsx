import React from 'react'
import {topPicks} from '../data/data'
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from '@splidejs/react-splide'

export const TopPicks = () => {
  return (
    <div>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
          Top Picks
        </h1>
        <div className='flex max-w-[1520px] m-auto py-2 px-2'>
          <Splide options={{perPage:4,gap:"0.5rem",drag:"free",arrows:false}}>
            {
              topPicks.map(item => (
                <SplideSlide key={item.id}>
                  <div className='rounded-3xl relative'>
                    <div className='absolute w-full h-full rounded-3xl text-white'>
                    <p className='px-2'>{item.title}</p>
                    <p className='px-2'>{item.price}</p>
                    <button className='border-dotted border-white text-white
                    mx-2 absolute bottom-4'>
                      Add to Cart
                    </button>
                  </div>
                  <img src={item.img}
                   className='h-[200px] w-full object-cover rounded-3xl cursor-pointer
                   hover:scale-105 ease-out duration-300'
                   alt={item.title} />
                  </div>
                </SplideSlide>
              ))
            }
          </Splide>
        </div>

    </div>
  )
}
