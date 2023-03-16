import React from 'react'
import { about } from '../data/about'
const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen home_bg "
    >
      <div className="flex flex-col justify-center items-center ">
        <div className="text-black py-16 rounded-md flex flex-col justify-center items-center w-4/6 ">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </p>
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
          
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 sm:mt-0 mt-8" style={{ wordWrap: "break-word", maxWidth: "100%", overflowWrap: "break-word" }}>
            <div className="sm:text-right text-4xl font-bold">
              <p>
                {about.intro}
              </p>
            </div>
            <div>
              <p>
                {about.body}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default About;
