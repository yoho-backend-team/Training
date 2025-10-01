import React from 'react'


import OurStory from '../webTask/All pages/OurStory';
import OurSpeaker from './All pages/OurSpeaker';
import NextShedules from './All pages/NextShedules';
import EventSpeaker from './All pages/EventSpeaker';
import Tickets from './All pages/Tickets';
import Venue from './All pages/Venue';
import Form from './All pages/Form';
import Footer from './All pages/Footer';
import { FaCircleArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
        <div className='relative'>
            <img src='https://img.freepik.com/premium-photo/computer-blur-office-background_87720-41486.jpg'
            className='w-full h-160'/>
            <div className='absolute inset-0 flex justify-center mt-3 py-20'>
            <div>
            <h1 className='font-bold text-3xl text-white flex justify-center'><span className='text-blue-500 font-bold text-3x underline'>LEADERSHIP </span>CONFERENCE</h1>
            <h1 className='text-white font-bold text-3xl flex justify-center'>2022</h1>
            <div className='flex justify-center mt-7'>
            <button className='border p-1 text-white'>July 12 to 18,2022</button>
            <button className='border p-1 text-white'>Times Square NY</button>
            </div>
            <div className='flex justify-center text-4xl text-white mt-5'>
              <FaCircleArrowDown/>
            </div>
            <div className='grid grid-cols-3 gap-5 py-40 relative'>
              <div>
                <img src='https://tse2.mm.bing.net/th/id/OIP.PkRWaD8fVBfn85t_EOePeQHaFd?pid=Api&P=0&h=220'
                className='w-80 h-45'
                />
              </div>
              <div>
                <img src='https://tse2.mm.bing.net/th/id/OIP.PkRWaD8fVBfn85t_EOePeQHaFd?pid=Api&P=0&h=220'
                className='w-80 h-45'
                />
              </div>
              <div>
                <img src='https://tse2.mm.bing.net/th/id/OIP.PkRWaD8fVBfn85t_EOePeQHaFd?pid=Api&P=0&h=220'
                className='w-80 h-45'
                />
              </div>
            </div>
            <div className=' absolute inset-0 mt-130 flex gap-60 justify-center font-bold'>
              <div>  
                <h1 className='text-white'>2019 Highlights</h1>
              </div>
              <div>
                <h1 className='text-white'>2020 Highlight</h1>
              </div>
              <div>
                <h1 className='text-white'>2021 Highlight</h1>
              </div>
            </div>
            </div>
            </div>
            <OurStory/>
            <OurSpeaker/>
            <div>
                <NextShedules/>
                <EventSpeaker/>
                <Tickets/>
                <Venue/>
                <Form/>
               <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Home
