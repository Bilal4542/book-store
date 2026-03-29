import React from 'react'
import bookData from '../assets/bookCardData.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookCard from './BookCard.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { data } from 'react-router-dom';

const FreeBooks = () => {

  const [book,setBook] = useState([])

  useEffect(()=>{
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:4000/book')
        console.log(res.data)
        const data = res.data.filter((data) => data.bookCategory === 'Free')
        setBook(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  },[])

  // const filterData = bookData.filter((item)=>item.bookCategory === 'Free');
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className='flex items-center justify-center'>
      <div className="w-[90%] flex items-center justify-center ">
        <div className="flex-1 space-y-2">
          <h1 className='font-semibold text-xl'>Free Offered Courses</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam error recusandae maiores laudantium hic nostrum dolor nemo vero. Voluptatibus, neque?</p>
        </div>
        </div>
      </div>
          <div className="slider-container w-[90%] mx-auto my-10 space-x-4">
      <Slider {...settings}>
        {book.map((item)=>(
          <BookCard item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default FreeBooks
