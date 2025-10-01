import React from 'react'

const Form = () => {
  return (
    <div>
      <div>
                   <div className='relative'>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20240611/pngtree-illustration-of-man-using-laptop-image_15866665.jpg"
                    className='w-full h-100'
                    />
                    <div className='absolute inset-0'>
                        <div className='flex justify-center mt-10'>
                            <div className=' rounded-md w-130 h-85 bg-white'>
                                <div className='bg-blue-900 rounded-t-md h-10'>
                                    <h1 className="text-white pt-2 pl-3">Please Say Hi</h1>
                                </div>
                                <div className='grid grid-cols-3 py-5 ml-4'>
                                    <div>
                                        <input
                                        className='border bg-blue-300 rounded-md py-2 w-40'
                                        type="text"
                                        placeholder='Name'
                                        />
                                    </div>
                                    <div>
                                        <input
                                        className='border bg-blue-300 rounded-md py-2 w-40'
                                        type="text"
                                        placeholder='Email'
                                        />
                                    </div>
                                    <div>
                                        <input
                                        className='border bg-blue-300 rounded-md py-2 w-40'
                                        type="text"
                                        placeholder='Subject'
                                        />
                                    </div>
                                </div>
                                <div className='ml-4 '>
                                    <input
                                    className='border w-124 h-30 rounded-md bg-blue-300'
                                    placeholder='Message'
                                    text="text"
                                    />
                                </div>
                                <div className='ml-4 mt-3'>
                                    <button
                                    className='border py-2 w-124 rounded-md bg-blue-400'
                                    type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
    </div>
  )
}

export default Form
