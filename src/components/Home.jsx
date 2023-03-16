import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom"; 
import TextTyper from "./TextTyper";
import { home } from "../data/home";

const Home = () => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 1300)

    return () => clearTimeout(timeout)

  }, [show])

  return (
    <div
    name="home"
    className="home_bg"
  >
    <div className="max-w-screen-lg min-w-screen min-h-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full ">
      
        <h1 className="text-4xl sm:text-7xl font-bold text-white ">
          < TextTyper sentence={home.intro} time={60}/>
        </h1>
        <section className="text-white py-4 max-w-md " >
          {show && < TextTyper sentence={home.body} time={45}/>}
        </section>
        <div>
          <Link
            to="/about"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:scale-x-0 transform origin-right duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
        <div className="avatar_img">
          <img src={`${process.env.PUBLIC_URL}/penguinIcon.png`} alt='My avatar'/>
        </div>
        </div>
     
      </div>
  
    </div>
    );
  };
  export default Home;