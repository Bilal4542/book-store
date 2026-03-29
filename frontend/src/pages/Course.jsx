import React from 'react'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'



const Course = () => {
  const [book,setBook] = useState([])

  useEffect(()=>{
    const getBook = async () =>{
      try {
        const res = await axios.get('http://localhost:4000/book')
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])
  return (
    <div className='mt-28 flex items-center justify-center'>
      <div className="flex items-center justify-center flex-col w-[90%] space-y-6">
        <h1 className='text-2xl md:text-4xl text-center'>We are delighted to have you <span className='text-pink-500'>Here :) </span></h1>
        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum perferendis repellendus veniam amet sunt nostrum tenetur iusto! Culpa odio impedit distinctio, illo, delectus rerum nam autem officia animi nulla ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nihil.</p>
       <Link to={'/'}> <button className='text-white bg-pink-500 px-3 py-2 rounded-md cursor-pointer hover:bg-pink-700 duration-300'>Back</button></Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {book.map((item)=>(
                <BookCard key={item.id} item={item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Course
