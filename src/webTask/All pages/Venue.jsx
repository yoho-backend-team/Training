import React from 'react'
import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Venue = () => {
  return (
    <div>
      <div className='bg-blue-200 h-75 py-5'>
                    <div>
                        <h1 className='font-bold text-2xl px-110'>Here you go<span className='text-blue-500 pl-2 underline'>Venue</span></h1>
                    </div>
                    <div className='flex  justify-center mt-5 px-60'>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.477766223794!2d78.87038544480536!3d11.234210023098093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1b69f8350197%3A0x70ef43f0315a8d8b!2sPerambalur%2C%20Tamil%20Nadu%20621220!5e0!3m2!1sen!2sin!4v1758890139806!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <iframe className='w-75 h-50' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.477766223794!2d78.87038544480536!3d11.234210023098093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1b69f8350197%3A0x70ef43f0315a8d8b!2sPerambalur%2C%20Tamil%20Nadu%20621220!5e0!3m2!1sen!2sin!4v1758890357470!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='ml-10'>
                            <div className='shadow-xl shadow-gray-500 rounded-md w-75 h-50'>
                                <div className='bg-blue-900 text-white pl-2 rounded-t-md py-2'>
                                    <h1>Times Square</h1>
                                </div>
                                <div className='flex pl-3 py-2'>
                                    <IoLocation className='w-8 h-6'/>
                                    <p className='pl-3 font-bold'>102 South. 7th Street, New Yourk, NY 10036, USA</p>
                                </div>
                                <div className='flex pl-3 mt-2 py-2'>
                                    <IoMdMail className='w-4 h-6' />
                                    <p className='pl-3 '>hi@company.com</p>
                                </div>
                                <div className='flex pl-3 mt-2 py-2'>
                                    <FaPhoneAlt className='w-4 h-4'  />
                                    <p className='pl-3'>9363104589</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Venue
