import {useState} from 'react'
import { Ri24HoursFill, RiCloseLine, RiMenu3Fill } from '@remixicon/react'
import { RiAlignRight } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
    setIsOpen(!isOpen)
}
    
    return (
        <nav className="fixed  left-0 right-0 z-50 m2 bg-white border-b border-neutral-200">
            <div className="text-neutral-500  
            max-w-7xl mx-auto px-4 py-7 pb-5 flex justify-between items-center text-black-900
             ">
                {/* Left Logo */}
                <a href='/' className='text-3xl text-blue-900 font-bold'>Fintech</a>

                {/* Right Links */}
                <div className="hidden md:flex space-x-6 text-neutral-700 font-semibold">
                    <Link to="/" className=" hover:text-neutral-700 py-2 px-4">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-neutral-700 py-2 px-4">
                        About Us
                    </Link>
                    <Link to="/about" className="hover:text-neutral-700 py-2 px-4">
                        Features
                    </Link>
                   
                    <Link to="/login" className=" text-black
                    py-2 px-4 rounded-lg hover:text-neutral-700 transition">
                        Login
                    </Link>
                    <Link to="/signup" className="bg-blue-600 text-white
                    py-2 px-4 rounded-full hover:bg-blue-500 transition">
                        Open Account
                    </Link>
                </div>
                


                {/* hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white focus:outline-none'
                        aria-label={isOpen ? "Open Menu" : "Close Menu"}>
                    {isOpen ? <RiCloseLine className='text-gray-900' /> : <RiMenu3Fill className='text-gray-900' />}
                    </button>
                </div>

            </div>

            {/* nav menu */}
            {isOpen && 
                (
                <div className="md:hidden text-black backdrop-blur-md border-b
                border-neutral-200 p-4 rounded-xl mt-2">
                    <div className='flex flex-col text-center space-y-4'>
                    <a href="#" className="hover:text-neutral-700 py-2 px-4">
                        Home
                    </a>
                    <a href="#" className="hover:text-neutral-700 py-2 px-4">
                        About Us
                    </a>
                    <a href="#" className="hover:text-neutral-700 py-2 px-4">
                        Features
                    </a>
                   
                    <a href="#" className=" text-black
                    py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
                        Login
                    </a>
                    <a href="#" className="bg-blue-600 text-white
                    py-2 px-4 rounded-full hover:bg-blue-500 transition">
                        Open Account
                    </a>
                  
                    </div>
                </div>
            )
            }
        </nav>
  )
}
