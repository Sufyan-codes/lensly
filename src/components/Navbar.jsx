import {useState} from 'react'
import logo from "../assets/logo.png"
import { Ri24HoursFill, RiCloseLine, RiMenu3Fill } from '@remixicon/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
    setIsOpen(!isOpen)
}
    
    return (
        <nav className="fixed py-4 left-0 right-0 z-50 m2 bg-black/60 backdrop-blur-md  border-b border-neutral-900">
            <div className="text-neutral-500 
            max-w-7xl mx-auto px-4 py-3 flex justify-between items-center
            rounded-xl ">
                {/* Left Logo */}
                <a href="#"><h1 className='text-white font-semibold text-xl'>Sufyan.dev</h1></a>

                {/* center Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-neutral-200">
                        Home
                    </a>
                    <a href="#about" className="hover:text-neutral-200">
                        About Me
                    </a>
                    <a href="#projects" className="hover:text-neutral-200">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-neutral-200">
                        Contact Me
                    </a>
                </div>

            
                {/* hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='text-white focus:outline-none'
                        aria-label={isOpen ? "Open Menu" : "Close Menu"}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
                    </button>
                </div>

            </div>

            {/* nav menu */}
            {isOpen && 
                (
                <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border
                border-neutral-800 p-4 rounded-xl mt-2">
                    <div className='flex flex-col space-y-4'>
                        <a href="#" className='hover:text-neutral-200'>
                            Product
                        </a>
                        <a href="#" className='hover:text-neutral-200'>
                            Pricing
                        </a>
                        <a href="#" className='hover:text-neutral-200'>
                            Resources
                        </a>
                        <a href="#" className='hover:text-white'>
                            Login
                        </a>
                   
                    </div>
                </div>
            )
            }
        </nav>
  )
}
