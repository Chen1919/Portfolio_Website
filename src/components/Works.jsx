import React from 'react';
import WorkMap from './workMap'
import { works } from '../data/works'

const Works = () => {
  return (
    <div name='work' className='home_bg'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 text-black-300 border-cyan-500'>
            Works
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent works!</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 ' >
            {/* Grid Item */}
          {works.map((project, i) => (
            <WorkMap 
              key = {i}
              name = {project.name}
              summary = {project.summary}
              description = {project.description}
              link = {project.links}
            />
          ))} 
          
        </div>
      </div>
    </div>
  );
};
export default Works;