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
            <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Limiteless Convience on-demand</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor quis pariatur repudiandae, aut laboriosam 
            dolorum corporis exercitationem aperiam, beatae possimus animi. Quisquam dolorum beatae nisi itaque quam perferendis mollitia.
            Consectetur totam voluptates sed delectus maiores optio quas? Suscipit, reiciendis adipisci. Voluptates temporibus voluptatibus quae.
            Impedit nobis necessitatibus provident esse quae soluta hic assumenda odio temporibus repudiandae. Quasi, magnam velit?
            A dignissimos dolores quis, aut doloremque, minus dolor qui assumenda temporibus voluptates autem nulla optio ipsam,
            dolorum saepe sit ab repellendus sapiente cum similique magni fuga delectus culpa. At, quam?
            </p>
            <button className='bg-black text-[#00df9a] 
            w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
        </div>
    </div>
  )
}
