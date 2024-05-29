import React, { useState } from 'react'
import {mealData} from "../data/data"
import { BsArrowRight } from 'react-icons/bs'

export const Meal = () => {
  const [foods,setFoods] = useState(mealData);
  const filterCategory = (category) => {
    setFoods(
      mealData.filter((item)=> {
        return item.category === category;
      })
    )
  }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
          Our Meal
        </h1>
        <div className='flex flex-col lg:flex-row justify-center'>
          <div className='flex justify-center md:justify-center my-2'>
            <button
            onClick={() => setFoods(mealData)}
            className='m-1 py-1 px-10 rounded-2xl border-orange-700
            text-white bg-orange-700'>
              All
            </button>
            <button
            onClick={() => filterCategory("pizza")}
            className='m-1 py-1 px-10 rounded-2xl border-orange-700
            text-white bg-orange-700'>
              Pizza
            </button>
            <button
            onClick={() => filterCategory("chicken")}
            className='m-1 py-1 px-10 rounded-2xl border-orange-700
            text-white bg-orange-700'>
              Chicken
            </button>
            <button
            onClick={() => filterCategory("salad")}
            className='m-1 py-1 px-10 rounded-2xl border-orange-700
            text-white bg-orange-700'>
              Salad
            </button>
            <button
            onClick={() => filterCategory("noddle")}
            className='m-1 py-1 px-10 rounded-2xl border-orange-700
            text-white bg-orange-700'>
              Noddle
            </button>
          </div> 
        </div>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 
        lg:grid-cols-4 gap-6'>
           {
            foods.map(m =>(
              <div key={m.id}>
                <img src={m.image} alt={m.name}
                className='w-full h-[200px] object-cover rounded' 
                />
                <div className='flex justify-between py-2 px-4'>
                  <p className='font-bold'>{m.name}</p>
                  <p className='bg-orange-700 h-18 w-18
                  text-white py-4 px-2 border-8 rounded-full -mt-10'>
                    {m.price}
                  </p>
                </div>
                <div className='pl-2 py-4'>
                  <span className='flex items-center text-indio-600'>
                    View More
                    <BsArrowRight
                    size={25}
                    className='w-5 ml-2 text-black inline' />
                  </span>
                </div>
              </div>
            ))
           }
        </div>
    </div>
  )
}
