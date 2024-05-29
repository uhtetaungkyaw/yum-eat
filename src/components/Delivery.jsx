import React from 'react'

export const Delivery = () => {
  return (
    <div className='max-w-[1520px] bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>
            Quick Delivery App
        </h3>
        <div className='w-full mx-auto grid md:grid-cols-2'>
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
          className="w-[550px] mx-auto my-4"
        />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitess Convience on-demand</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, sunt mollitia corporis provident eligendi vero, maxime facere ratione laboriosam nobis libero ea totam odio reiciendis? Dicta dignissimos amet fuga maiores.
                Soluta earum aspernatur, est fugit, cum, impedit delectus sed ipsa quasi exercitationem ut a. Ad mollitia aliquid quos porro voluptatibus, numquam ducimus odio iusto! Excepturi nobis ipsa at recusandae culpa.
                Recusandae fuga libero optio deserunt, facilis ducimus iusto dolorem delectus debitis sequi maxime illum aspernatur vero accusamus sit. Accusamus dolor minima fugiat at! 
                Expedita nostrum adipisci at laudantium! Aut, placeat.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md
            font-medium my-6 mx-auto md:mx-0 py-3'
            >Get Started</button>
        </div>
        </div>
    </div>
  )
}
