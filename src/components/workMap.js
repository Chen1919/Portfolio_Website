import React from 'react'

//src={`../../../left/${img}.png`}
export default function workMap({img, name, summary, description, link}) {
  const imagePath = `../assets/works/${img}.png`;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${imagePath})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
          <span className=' text-lg font-bold text-white tracking-wider'>
            {name}
          </span>
          <p className='text-center'>{summary}</p>
          <div className='pt-8 text-center'>
            {/*<a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
  </button>
            </a>*/}
            <a target="_blank" rel="noreferrer" href={link}>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
