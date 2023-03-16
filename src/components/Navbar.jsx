import React, { useState } from 'react'; 
import './style.css';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='relative w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-black-300'>
      <div>
        <h1 className=' font-thin text-2xl italic font-serif '>CP</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-6 '>
        <li className='home_bar'>
          <Link to='/' >
            Home
          </Link>
        </li>
        <li className='home_bar'>
          <Link to='/about' >
            About
          </Link>
        </li>
        <li className='home_bar'>
          <Link to='/skills' >
            Skills
          </Link>
        </li>
        <li className='home_bar'>
          <Link to='/works' >
            Work
          </Link>
        </li>
        <li className='home_bar'>
          <a target="_blank" rel="noreferrer" href='mailto: c9peng@uwaterloo.ca'> Contact Me </a>
          {/*<Link to='contact' smooth={true} duration={500}>
            Contact
          </Link> */}
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen home_bg flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/' >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='/about' >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='/skills' >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='/works' >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <a target="_blank" rel="noreferrer" href='mailto: c9peng@uwaterloo.ca'> Contact Me </a>

         {/* <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
      </Link> */}
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/chen-peng-b2b735210/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank" rel="noreferrer" href='https://github.com/Chen1919'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank" rel="noreferrer" href='mailto: c9peng@uwaterloo.ca'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              target="_blank" rel="noreferrer" href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;