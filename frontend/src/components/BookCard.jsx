import React from 'react'

const BookCard = ({item}) => {
  return (
    <>
    <div className="my-10">
      <div className="card bg-base-100 w-96 mx-2 shadow-sm hover:scale-105 duration-300 ease-in-out">
  <figure>
    <img
      src={item.bookImage}
      alt="Shoes" className='w-[70%] h-72' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.bookName}
      <div className="badge badge-secondary">{item.bookCategory}</div>
    </h2>
    <p>{item.bookDesc}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.bookPrice}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer px-2 py-1">Buy Now</div>
    </div>
  </div>
</div>
    </div> 
    </>
  )
}

export default BookCard
