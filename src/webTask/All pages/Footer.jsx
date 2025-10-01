import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='h-20 py-10'>
                    <div className='flex justify-between px-10'>
                        <div>
                            <h1 className='text-blue-400 font-bold'>Leadership Events</h1>
                        </div>
                        <div>
                            <div className='flex gap-5 mr-25 mb-10'>
                                <p><FaFacebook /></p>
                                <p><GrInstagram /></p>
                                <p><IoLogoWhatsapp /></p>
                                <p><FaYoutube /></p>
                            </div>
                        </div>
                    </div>
                    <hr className='text-gray-400'/>
                    <div className='flex justify-between mt-5 px-10'>
                        <div className='flex gap-5'>
                            <p> Our Story</p>
                            <p>Code of Conduct</p>
                            <p>Privacy and Terms</p>
                            <p>Contact</p>
                        </div>
                        
                        <div>
                            <p>Copyright @ 2022 Leadership Event Co, Ltd.</p>
                            <p>All lights Reserved</p>
                            <p>Design Template</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Footer
