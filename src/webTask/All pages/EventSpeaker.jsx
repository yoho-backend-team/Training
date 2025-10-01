import React from 'react'

const EventSpeaker = () => {
  return (
    <div>
      <div>
                          <div className='relative mt-10'>
                              <img src="https://tse3.mm.bing.net/th/id/OIP.qb2vTjxp2lHGr3yQWRxS7AHaD6?pid=Api&P=0&h=220"
                              className='w-full h-60'
                              />
                          <div className='absolute inset-0 flex justify-center mt-10'>
                              <div className='w-180'>
                              <h1 className='text-white font-bold text-2xl py-4'>Becomes an <span className='text-blue-400 underline'>event speaker?</span></h1>
                              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore. Hic facere quae modi quisquam, dolore dolorem quaerat labore pariatur sit enim tenetur placeat quas, repellendus fugit voluptatibus molestiae deleniti?</p>
                              </div>
                              <div>
                                  <button className='border bg-white rounded-2xl p-1 mt-20 ml-10'>Register Now</button>
                              </div>
                          </div>
                          </div>
                      </div>
    </div>
  )
}

export default EventSpeaker
