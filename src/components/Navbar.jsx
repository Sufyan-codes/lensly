import {useState} from 'react'
import { Ri24HoursFill, RiCloseLine, RiMenu3Fill } from '@remixicon/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
    setIsOpen(!isOpen)
}
    
    return (
        <nav className="fixed py-4 left-0 right-0 z-50 m2  bg-white ">
            <div className="text-neutral-500 
            max-w-6xl mx-auto px-4 py-3 flex justify-between items-center
            rounded-xl ">
                {/* Left Logo */}
                <Link to='/'><h1 className='text-neutral-800 text-2xl kanit-light font-bold'>Lensly</h1></Link>


            
                {/* hamburger */}
                <div className="">
                    <button onClick={toggleMenu} className='text-neutral-800 text-2xl font-bold focus:outline-none'
                        aria-label={isOpen ? "Open Menu" : "Close Menu"}>
                    {isOpen ? <RiCloseLine /> : <RiMenu3Fill />}
                    </button>
                </div>

            </div>

            {/* nav menu */}
            {isOpen && 
                (
                <div className=" max-w-6xl  backdrop-blur-md text-right
                 p-4  mt-2">
                    <div className='flex flex-col space-y-4  gap-5'>
                        <Link to='/' className='hover:text-black-900 under text-neutral-800'>
                            Home
                        </Link>
                        <Link to='/gallery' className='hover:text-black-800 text-neutral-800'>
                            Gallery
                        </Link>
                        <Link to="/about" className='hover:text-black-800 text-neutral-800'>
                            About Us
                        </Link>
                        <Link to="/team" className='hover:text-black-800 text-neutral-800'>
                            Our Team
                        </Link>
                        <Link to="/contact" className='hover:text-black-800 text-neutral-800'>
                            Contact
                        </Link>
                   
                    </div>
                </div>
            )
            }
        </nav>
  )
}
