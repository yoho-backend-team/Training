import React from 'react'

const OurStory = () => {
  return (
    <div>
      <div className='flex justify-between py-10 px-65 gap-3'>
                <div>
                    <h1 className='text-2xl font-bold mb-5'>Our <span className='text-blue-400 underline'>Story</span></h1>
                    <p className='font-bold mb-4'>The importance of Leadership Conference in 2022</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque omnis nam facilis commodi nihil numquam ipsum autem, ullam, quidem repudiandae. Beatae impedit sint molestias soluta, officiis necessitatibus fugiat doloribus.</p>
                    <div className='py-2'>
                        <button className='border-2 border-blue-500 rounded-xl p-2 text-blue-500 font-bold'>Meet Speakers</button>
                        <button className='border rounded-xl ml-4 p-2 bg-blue-950 text-white'>Check out Schedules</button>
                    </div>
                </div>
                
                <div className='py-12'>
                    <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus aut ex, deserunt earum necessitatibus labore, obcaecati corrupti repellendus pariatur at culpa quasi laborum quisquam est dolore, perspiciatis rerum. Iusto!</p>
                    <hr className='mt-9 text-gray-300'/>
                    <div className='flex py-5'>
                    <div className='flex'>
                      <div>
                        <img src="https://abouteball.com/wp-content/uploads/2015/03/photodune-4276142-smiling-portraits-m1.jpg"
                        className='rounded-full w-8 h-8'
                        />
                      </div>
                      <div>
                        <img src="https://abouteball.com/wp-content/uploads/2015/03/photodune-4276142-smiling-portraits-m1.jpg"
                        className='rounded-full w-8 h-8'
                        />
                      </div>
                      <div>
                        <img src="https://abouteball.com/wp-content/uploads/2015/03/photodune-4276142-smiling-portraits-m1.jpg"
                        className='rounded-full w-8 h-8'
                        />
                      </div>
                      <div>
                        <img src="https://abouteball.com/wp-content/uploads/2015/03/photodune-4276142-smiling-portraits-m1.jpg"
                        className='rounded-full w-8 h-8'
                        />
                      </div>
                    </div>
                    
                    <div className='pl-12'>
                      <p>120+ People are attending with us</p>
                    </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default OurStory
